celery -A flask_celery_learn.test worker -l info

celery -A flask_celery_learn.flask_celery:celery  worker -l info
