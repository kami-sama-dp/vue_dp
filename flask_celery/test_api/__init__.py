from celery import Celery
import os
import click
from flask import Flask
from test_api.settings import config
from flask import jsonify
from test_api.models import db
app = Flask(__name__, instance_relative_config=True)
app.config.from_object(config['development'])
db.init_app(app)
# 初始化Celery
# celery = Celery(app.name, broker=app.config['CELERY_BROKER_URL'], backend=app.config['CELERY_RESULT_BACKEND'])
# celery.conf.update(app.config) # 将Flask中的配置直接传递给Celery
from redis import Redis

redis = Redis

def make_celery(app):
    celery = Celery(
        app.import_name,
        backend=app.config['CELERY_RESULT_BACKEND'],
        broker=app.config['CELERY_BROKER_URL']
    )
    celery.conf.update(app.config)
    TaskBase = celery.Task

    class ContextTask(TaskBase):
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self,  *args,  **kwargs)

    celery.Task = ContextTask
    return celery


def create_app(config_name=None):
    if config_name is None:
        config_name = os.getenv("FLASK_ENV", 'development')

    app = Flask(__name__)
    app.config.from_object(config[config_name])
    register_blueprints(app)
    register_errors(app)
    app.app_context().push()
    return app


def register_blueprints(app):
    from test_api.api.v1 import api_v1
    app.register_blueprint(api_v1, url_prefix='/api/v1')


def register_errors(app):
    @app.errorhandler(400)
    def bad_request(e):
        response = jsonify(code=400, message='Bad Request')
        response.status_code = 400
        return response

    @app.errorhandler(403)
    def forbidden(e):
        response = jsonify(code=403, message='Forbidden')
        response.status_code = 403
        return response

    @app.errorhandler(404)
    def page_not_found(e):
        response = jsonify(code=404, message='The requested URL was not found on the server.')
        response.status_code = 404
        return response

    @app.errorhandler(405)
    def method_not_allowed(e):
        response = jsonify(code=405, message='The method is not allowed for the requested URL.')
        response.status_code = 405
        return response


