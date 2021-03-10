from celery import Celery
import time
BROKER_URL = 'redis://localhost:6379/0'
CELERY_RESULT_BACKEND = 'redis://localhost:6379/1'
celery = Celery('tasks', broker=BROKER_URL, backend=CELERY_RESULT_BACKEND)

@celery.task
def reverse(string):
    time.sleep(10)
    return string[::-1]