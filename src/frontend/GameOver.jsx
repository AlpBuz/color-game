import React, { useState } from "react";


//function for displaying the gameover screen
function GameOver({Score}){
    const [user, setUser] = useState("")
    const [addedScore, setAddedScore] = useState(false)

    //submits form for updating the leaderboard with the users score and name
    const formSubmit = async (event) => {
        event.preventDefault();
        const payload = new FormData();
        payload.append("UserName", user);
        payload.append("userScore", Score + 100)

        try{
            const response = await fetch("http://localhost:5000/update_leaderBoard", {
                method: "POST",
                body: payload
            })
            const data = await response.json();
            setAddedScore(data.addedScore);
            

        }catch (error){
            console.error("error in sending User Score: ", error.message)
        }
        
    }

    const handleInputChange = (event) => {
        setUser(event.target.value);
      };



    return(
        <div>
            <h1> Game Over</h1>
            
            <div>
                <p>Total Points: {Score + 100}</p>
            </div>

            {addedScore && <p className="updatedLeaderboard" style={{"color": "green"}}>LeaderBoard has been updated</p>}

            <form name="Submit-User" action="" method="post" onSubmit={formSubmit}>
                <div>
                    <input className="input" 
                    type="textbox" 
                    id="User-Name"
                    value={user} 
                    onChange={handleInputChange}
                    required 
                    placeholder="Enter Name"/>
                </div>
            </form>

        </div>
    );
}

export default GameOver;