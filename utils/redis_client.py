import redis


def get_redis_client() -> redis.Redis:
    """
    Get Redis client running in local host
    Returns:
        Redis client
    """
    return redis.Redis()  # type: redis.Redis
