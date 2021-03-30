from datetime import datetime
from urllib.request import Request, urlopen

import redis
from urllib.error import HTTPError

from utils.constants import RESULT_HEADERS, HASH_NAME, SEARCH_FIELD
from utils.exceptions import ErrorDownloadingFile
from utils.redis_client import get_redis_client


def read_csv_to_dict(file_path: str) -> list:
    """
    Converts CSV file to list of objects with required keys present in RESULT_HEADERS
    Args:
        file_path: Path to CSV file

    Returns:
        List of dictionaries containing required data from CSV
    """
    res = []

    # Open CSV file for reading
    with open(file_path) as f:
        # Ignore first line containing header
        f.readline()

        # Iterate over remaining lines and get relevant data
        for line in f.readlines():
            r = line.split(",")
            res.append({
                RESULT_HEADERS[0]: r[0],
                RESULT_HEADERS[1]: r[1],
                RESULT_HEADERS[2]: r[4],
                RESULT_HEADERS[3]: r[5],
                RESULT_HEADERS[4]: r[6],
                RESULT_HEADERS[5]: r[7]
            })

    return res


def convert_byte_dict_to_str_dict(inp: dict) -> dict:
    """
    Convert dictionaries with keys and values as bytes to strings
    Args:
        inp: Dictionary with key and values in bytes

    Returns:
        Dictionary with key and value as string
    """
    new_dict = dict()
    for k, v in inp.items():
        new_dict[k.decode()] = str(v.decode())

    return new_dict


def get_results(search_key: str) -> list:
    """
    Get all the values from Redis which has search key in the name
    Args:
        search_key: Search key typed by user in the UI

    Returns:
        List of dicts matching the search_key
    """
    client = get_redis_client()  # type: redis.Redis

    final_result = []
    i = 0

    # Loop through Hashmap until hashmap with counter returns null
    while True:
        # Get hashmap which is combination of name and counter
        details = client.hgetall(f"{HASH_NAME}:{i}")

        # If details not found, it means we have reached the end, so break the loop
        if not details:
            break

        # Increment the counter in order to move the pointer
        i += 1

        # Check if search value present in the name, if not skip the value
        sc_name = details[bytes(SEARCH_FIELD, encoding='utf-8')].decode()
        if not sc_name.lower().__contains__(search_key):
            continue

        # Append the value to final result as the search key present in the name
        final_result.append(convert_byte_dict_to_str_dict(details))

    return final_result


def download_file(download_link: str, file_name: str, file_path: str) -> bool:
    """
    Download the file to specified path
    Args:
        download_link: Portal download link
        file_name: name of the downloaded file
        file_path: path in which file to be stored

    Returns:
        True if file download is successfull

    Raises:
        ErrorDownloadingFile
    """
    # Set headers and create request
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                             "(KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"}
    request = Request(download_link, headers=headers)

    # try downloading the file
    try:
        response = urlopen(request)
    except HTTPError:
        raise ErrorDownloadingFile("Unable to download the file")

    # Read the response content
    content = response.read()

    # Write contents to file
    try:
        with open(f"{file_path}/{file_name}", "wb") as f:
            f.write(content)
    except Exception:
        raise ErrorDownloadingFile("Unable to save the file")

    return True


def get_datetime_as_str(now: datetime) -> str:
    """
    Converts Datetime timestamp into readable string
    Args:
        now: Timestamp to be converted

    Returns:
        Readable timestamp
    """
    return f"{now.strftime('%d')} {now.strftime('%b')} {now.strftime('%Y')}" \
           f" {now.strftime('%I')}:{now.strftime('%M')} {now.strftime('%p')}" \
           f" {now.strftime('%Z')}"
