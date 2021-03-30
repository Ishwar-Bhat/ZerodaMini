from django.urls import path

from apis.views import get_results, get_last_download, download_again

# URL config to handle '/api/' path

urlpatterns = [
    path('search', get_results, name="search_api"),
    path('last_update', get_last_download, name="last_update"),
    path('download_again', download_again, name="download_again"),
]
