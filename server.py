#! /usr/bin/python
# -*- coding:utf-8 -*-

from flask import Flask, render_template, request
from Service_API import API_Service
import json
app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/webService', methods=['GET', 'POST'])
def callfunc():
    if request.method == 'POST':
        body = request.get_json()
        functionName = body.get('do')
        params = body.get('params')
        return HackyCall(functionName, params)
    else:
        functionName = request.args.get('do')
        return getattr(API_Service, functionName)()
    return 'webService no methods specified'


def HackyCall(functionName, params):
    index = 1
    length = len(params.items())
    call = functionName + '('
    for (k, v) in params.items():
        if type(v) == str:
            call += '"' + str(v) + '"'
        else:
            call += str(v)
        if not index == length:
            call += ','
        index += 1
    call += ')'
    return eval('API_Service.' + call)


if __name__ == '__main__':
    app.run(debug=True)
