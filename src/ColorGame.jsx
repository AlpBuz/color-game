import React from "react";
import { useState, useEffect } from "react";






export default function StartGame() {
    const [score, setScore] = useState (0);
    const [timer, setTimer] = useState(90);
    const [TimerIsActive, setTimerIsActive] = useState(true);
    const [userAnswer, setUserAnswer] = useState('')

    const [wordColor, setWordColor] = useState('blue');
    const [word, setWord] = useState('red');

    const [incorrectAnswer, setIncorrectAnswer] = useState(false);


    useEffect(() => {
        let interval;

        if (TimerIsActive && timer > 0) {

            interval = setInterval(() => {
              setTimer((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (!TimerIsActive && timer !== 120) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [TimerIsActive, timer])
    

    const updateScore = () => {
        setScore(score + 100);
    }

    const nextColorAndWord = (data) => {
        setWord(data['newWord'])
        setWordColor(data['newColor'])
    }

    const gameOver = () => {

    }

    const formSubmit = async (event) =>{
        event.preventDefault();
        const payload = new FormData();
        payload.append("color", wordColor);
        payload.append("userAnswer", userAnswer)
        console.log(payload)
        setUserAnswer('')

        try{

            const response = await fetch("http://localhost:5000/confirmAnswer", {
                method: "POST",
                body: payload
            })

            const data = await response.json();

            if(data['valid'] === true){
                setIncorrectAnswer(false);
                updateScore();
                nextColorAndWord(data);

            }else{
                setIncorrectAnswer(true);
            }
            

        }catch (error){
            console.error("error in sending answer: ", error.message)
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

            <div className="The-Color">
                <p style={{color: wordColor}}>{word}</p>
            </div>

            {incorrectAnswer && <p className="error" style={{"color": "red"}}>Answer is Incorrect</p>}
            <form name="Submit-Answer" action="" method="post" onSubmit={formSubmit}>
                <div>
                    <input className="input" type="textbox" id="User-Answer" value={userAnswer} onChange={(event) => setUserAnswer(event.target.value)} required placeholder="Enter Color"/>
                </div>
            </form>
        </div>
    );
}