# -*- coding: UTF-8 -*-
from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host = "0.0.0.0",port=3000,debug = False)