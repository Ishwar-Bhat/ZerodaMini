class CustomMiddleware:
    """
    Custom middleware function for handling CORS error during development
    """
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        res = self.get_response(request)

        # Allow requests from any hosts
        res["Access-Control-Allow-Origin"] = "*"

        # Below is not required currently
        # res["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"

        return res
