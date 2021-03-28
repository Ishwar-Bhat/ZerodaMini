import redis
from django.core.handlers.wsgi import WSGIRequest
from django.http import JsonResponse

from utils.constants import HASH_NAME, SEARCH_FIELD
from utils.redis_client import get_redis_client
from utils.utilities import convert_byte_dict_to_str_dict


def get_results(req: WSGIRequest) -> JsonResponse:
    """
    Get results API
    Args:
        req: Django request object

    Returns:
        JSON response containing List of search results
    """
    # Get the search key from the request
    search_key = req.GET['q']

    final_result = list()
    i = 0
    client = get_redis_client()  # type: redis.Redis

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

    # Return JSONResponse which is list of results
    return JsonResponse(final_result, safe=False)
