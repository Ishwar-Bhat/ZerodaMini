import redis

from utils.constants import HASH_NAME
from utils.redis_client import get_redis_client
from utils.utilities import read_csv_to_dict


def update_results() -> None:
    """
    Task which deletes everything in redis and updates content from CSV
    Returns:
        None
    """
    a = r"C:\Users\Ishu\Downloads\EQ190321_CSV\EQ190321.CSV"

    # Get list of dictionaries to store in Redis
    results = read_csv_to_dict(a)

    # Get Redis client
    client = get_redis_client()  # type: redis.Redis

    # Insert each row in to redis
    for i, row in enumerate(results):
        client.hset(f"{HASH_NAME}:{i}", 'SC_CODE', row['SC_CODE'], row)
