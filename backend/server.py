from Cypher import Cypher
from flask import Flask, request

app = Flask(__name__)

@app.route("/encrypt",methods = ['POST'])
def encrypt():
    shift = request.json["shift"]
    message = request.json["message"]
    cyp=Cypher()   
    return cyp.encrypt(message,shift)
    


@app.route("/decrypt",methods = ['POST'])
def decrypt():
    shift = request.json["shift"]
    cypher = request.json["cypher"]  
    cyp=Cypher()   
    return cyp.decrypt(cypher,shift)

if __name__ == '__main__':
    app.run()