# -*- coding: UTF-8 -*-

from flask import Flask,jsonify,request,render_template
from flask_cors import CORS
import numpy as np 
from app.calculate import plus



app = Flask(__name__)
CORS(app)



@app.route('/calculate')
def calculate():
    return render_template('calculate.html')

@app.route('/page1')
def page1():
    return render_template('page1.html')
@app.route('/page2')
def page2():
    return render_template('page2.html')
@app.route('/page3')
def page3():
    return render_template('page3.html')
@app.route('/page4')
def page4():
    return render_template('page4.html')

@app.route('/test',methods = ['GET'])
def test1():
    values = 2
    return jsonify({'return':'ok'})

@app.route('/predict', methods = ['GET','POST'])
def test():
    values = request.get_json()
    x1 = values['x1']
    x2 = values['x2']
    data = np.array([x1,x2])
    ans = 2
    
    return jsonify({'return':str(ans)})

