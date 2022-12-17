# -*- coding: UTF-8 -*-

from flask import Flask,jsonify,request
from flask_cors import CORS
import numpy as np 
from app.calculate import plus

app = Flask(__name__)
CORS(app)
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

