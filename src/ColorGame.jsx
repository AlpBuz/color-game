import React from "react";
import { useState, useEffect } from "react";





export default function StartGame() {
    const [score, setScore] = useState (0);
    const [timer, setTimer] = useState(120);
    const [TimerIsActive, setTimerIsActive] = useState(true);

    const [color, setColor] = useState('');
    const [word, setWord] = useState('');
    

    const updateScore = () => {
        setScore(score + 10);
    }

    const formSubmit = async (event) =>{
        event.preventDefault();


        try{

            const response = fetch("", {


            })

        }catch (error){
            console.log("error in sending answer: ", error.message)
        }
        
    }


    return(
        <div>
            <div className="score">
                <p>Score: {score}</p>
            </div>

            <div className="timer">
                <p>Time: {timer}</p>
            </div>

            <form name="Submit-Answer" action="" method="post" onSubmit={formSubmit}>
                <div>
                    <input type="textbox" id="User-Answer" required placeholder="Enter Color"/>
                </div>
            </form>
        </div>
    );
}