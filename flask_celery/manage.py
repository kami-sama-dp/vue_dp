from test_api import app
from flask_script import Manager, Server
from flask_migrate import Migrate, MigrateCommand
from test_api.models import db
from test_api.models import user

manager = Manager(app)
migrate = Migrate(app, db)
manager.add_command("db", MigrateCommand)
manager.add_command("runserver", Server(host="127.0.0.1"))


if __name__ == '__main__':
    manager.run(default_command='runserver')