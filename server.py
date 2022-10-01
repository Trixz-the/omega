from flask import Flask
from flask import request
from data_summarizer import startSum

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/api/search-data', methods=['POST'])
def result():
    return startSum(request.data)