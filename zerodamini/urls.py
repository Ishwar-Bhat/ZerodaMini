from django.contrib import admin
from django.urls import path, include


# zerodamini URL Configuration

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apis.urls')),
    path('', include('home.urls')),
]
