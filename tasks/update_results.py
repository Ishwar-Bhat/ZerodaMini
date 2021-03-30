from datetime import datetime

import pytz
import redis
from celery import shared_task

from utils.constants import HASH_NAME, HASH_COUNT, FILE_URL, FILE_NAME, LAST_DOWNLOAD
from utils.exceptions import ErrorDownloadingFile
from utils.redis_client import get_redis_client
from utils.utilities import read_csv_to_dict, download_file, get_datetime_as_str


@shared_task
def download_and_refresh() -> None:
    """
    Download the file and update the results in redis task
    Returns:

    """
    update_results()
    print("done")


def update_results() -> None:
    """
    Task which deletes everything in redis and updates content from CSV
    Returns:
        None
    """
    # Download the file into /tmp/ directory and extract the ZIP
    try:
        csv_file = download_equity_file()
    except ErrorDownloadingFile:
        print("Error downloading file")
        return

    # Get list of dictionaries to store in Redis
    results = read_csv_to_dict(csv_file)

    # Delete all old data
    delete_existing()

    # Get Redis client
    client = get_redis_client()  # type: redis.Redis

    # Set HASH_COUNT to length of results
    client.set(HASH_COUNT, len(results))

    # Insert each row in to redis
    for i in range(len(results)):
        row = results[i]
        client.hset(f"{HASH_NAME}:{i}", 'SC_CODE', row['SC_CODE'], row)

    # Get current timestamp as as readable string
    now = get_datetime_as_str(datetime.now(tz=pytz.timezone("Asia/Kolkata")))

    # Set the last update time
    client.set(LAST_DOWNLOAD, now)


def download_equity_file() -> str:
    """
    Downloads the Equity file from portal and extracts the ZIP
    Returns:
        Downloaded file name
    """
    from datetime import timedelta

    final_file_name = None

    # Download the latest file available in last 4 days
    for i in range(5):
        # Get current filename and url
        now = datetime.now(tz=pytz.timezone("Asia/Kolkata")) - timedelta(days=i)
        today = f"{now.strftime('%d')}{now.strftime('%m')}{now.strftime('%y')}"
        filename = FILE_NAME.format(today)
        download_link = FILE_URL.format(filename=filename)

        # Try downloading file
        try:
            if download_file(download_link, f"{filename}.zip", "/tmp"):
                # File download is successful, break
                final_file_name = filename
                break
        except ErrorDownloadingFile:
            pass

    # If unable to download the file raise Exception
    if not final_file_name:
        raise ErrorDownloadingFile("Failed")

    # If download successful extract the ZIP
    import zipfile
    with zipfile.ZipFile(f"/tmp/{final_file_name}.zip", "r") as zip_ref:
        zip_ref.extractall("/tmp/")

    # Return the csv file path after extract
    return f"/tmp/{final_file_name}.CSV"


def delete_existing() -> None:
    """
    Delete all existing data with SC_CODES
    Returns:
        None
    """
    # Get Redis client
    client = get_redis_client()  # type: redis.Redis

    # Get hash count
    count = client.get(HASH_COUNT)

    # If count is not set, return
    if not count:
        return

    # Delete all entries
    for i in range(int(count.decode())):
        client.delete(f"{HASH_NAME}:{i}")
