python manage.py db init

python manage.py db migrate

python manage.py db upgrade

创建数据库
python manange.py shell
>>> from test_api import db
>>> from test_api.models import user
>>> db.create_all()


celery -A celery_task.tasks:celery worker -l info

如果在windows下启动celery   需要—P gevent 不然会报错