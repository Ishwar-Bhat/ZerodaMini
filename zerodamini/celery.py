import os

from celery import Celery

# Celery settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'zerodamini.settings')

app = Celery('zerodamini')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()
