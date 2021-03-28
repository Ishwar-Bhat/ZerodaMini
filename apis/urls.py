from django.urls import path

from apis.views import get_results

# URL config to handle '/api/' path

urlpatterns = [
    path('search', get_results, name="search_api")
]
