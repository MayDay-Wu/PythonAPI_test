from flask import Flask,jsonify,request
from flask_cors import CORS
import numpy as np 
import app.calculate



app = Flask(__name__)
CORS(app)




@app.route('/predict', methods = ['GET','POST'])
def test():
    values = request.get_json()
    x1 = values['x1']
    x2 = values['x2']
    data = np.array([x1,x2])
    ans = calculate.plus(data)
    
    return jsonify({'return':str(ans)})

