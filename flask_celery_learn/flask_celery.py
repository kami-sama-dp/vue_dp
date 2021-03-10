from flask import Flask
from flask_celery_learn.celery_example import make_celery

app = Flask(__name__)
app.config['BROKER_URL'] = 'redis://localhost:6379/0'
app.config['CELERY_RESULT_BACKEND'] = 'redis://localhost:6379/1'

celery = make_celery(app)


@app.route('/process/<name>')
def process(name):
    reverse.delay(name)
    return "I sent an async result!"


@celery.task(name='celery_example.reverse')
def reverse(string):
    return string[::-1]




if __name__ == "__main__":
    app.run(debug=True)