from flask import Flask,Request,jsonify
from flask_cors import CORS




app = Flask(__name__)
CORS(app)
print("hellow")

@app.route('/')
def index():
    return "hellow!!"

if __name__ == "__main__":
    app.run(host = "0.0.0.0",port=3000,debug = True)