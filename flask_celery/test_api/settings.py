import os

basedir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))


class BaseConfig:
    DIALECT = 'mysql'
    USERNAME = 'root'
    PASSWORD = 'root'
    HOST = '127.0.0.1'
    PORT = '3306'
    DATABASE = 'celery'

    SQLALCHEMY_DATABASE_URI = '{}://{}:{}@{}:{}/{}?charset=utf8'.format(
        DIALECT, USERNAME, PASSWORD, HOST, PORT, DATABASE
    )
    TODOISM_LOCALES = ['en_US', 'zh_Hans_CN']
    TODOISM_ITEM_PER_PAGE = 20

    BABEL_DEFAULT_LOCALE = TODOISM_LOCALES[0]

    # SERVER_NAME = 'todoism.dev:5000'  # enable subdomain support
    SECRET_KEY = os.getenv('SECRET_KEY', 'a secret string')

    SQLALCHEMY_TRACK_MODIFICATIONS = True

    CELERY_RESULT_BACKEND='redis://127.0.0.1:6379/4'
    CELERY_BROKER_URL='redis://127.0.0.1:6379/3'
    # CELERY_CACHE_BACKEND='memory'

class DevelopmentConfig(BaseConfig):
    pass


class ProductionConfig(BaseConfig):
    pass


class TestingConfig(BaseConfig):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///'
    WTF_CSRF_ENABLED = False


config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig
}