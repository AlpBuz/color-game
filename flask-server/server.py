from flask import Flask, request, jsonify
from flask_cors import CORS
from helpers import nextColor, nextWord

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
leaderBoard = {}


@app.route("/confirmAnswer", methods=["POST"])
def ConfirmAnswer():
    response_data = {}
    data = request.form
    color = data["color"].lower()
    userAnswer = data["userAnswer"].lower()



    if(color == userAnswer): #check if users answer is correct
        response_data["valid"] = True
        response_data["newColor"] = nextColor()
        response_data["newWord"] = nextWord(response_data["newColor"])
        return jsonify(response_data)
    else:
        response_data["valid"] = False
        return jsonify(response_data)
    

@app.route("/update_leaderBoard", methods=["POST"])
def update_leaderBoard():
    data = request.form
    player = data["UserName"]
    Score = data["userScore"]
    
    leaderBoard[player] = Score
    print(leaderBoard)

    return jsonify({"message": "Leaderboard has been Updated", "addedScore": True})



@app.route("/get_leaderboard", methods=["GET"])
def get_leaderBoard():
    global leaderBoard
    leaderBoard = dict(sorted(leaderBoard.items(), key=lambda item: item[1], reverse=True)) #sorts the leaderBoard
    return jsonify(leaderBoard)
        
    

if __name__ == "__main__":
    app.run(debug=True)