from django.core.handlers.wsgi import WSGIRequest
from django.http import HttpResponse
from django.shortcuts import render


def home_page(req: WSGIRequest) -> HttpResponse:
    """
    Return contents for homepage
    Args:
        req: Django request object

    Returns:
        Http response which renders index.html template with the current request

    """
    return render(req, template_name='index.html')
