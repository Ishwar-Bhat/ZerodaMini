from django.urls import path

from home.views import home_page

# URL patterns to handle root path

urlpatterns = [
    path('', home_page, name="home_page")
]
