from test_api import make_celery, app

celery = make_celery(app)

@celery.task(name='111')
def reserver(name):
    return name[::-1]


# celery -A celery_task.tasks:celery worker -l info -P gevent