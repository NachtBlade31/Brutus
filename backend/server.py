from Cypher import Cypher
from flask import Flask, request,jsonify
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/encrypt",methods = ['POST'])
def encrypt():
    shift = int(request.json["shift"])
    message = request.json["message"]
    cyp=Cypher()
    data=  {'result':cyp.encrypt(message,shift)}   
    return cyp.encrypt(data)
    
@app.route("/decrypt",methods = ['POST'])
def decrypt():
    shift = int(request.json["shift"])
    cypher = request.json["message"]  
    cyp=Cypher() 
    data=  {'result':cyp.decrypt(cypher,shift)}
    return jsonify(data)

if __name__ == '__main__':
    app.run()