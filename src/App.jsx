import React, { useState, useEffect } from "react";
import StartGame from "./frontend/ColorGame";
import GameOver from "./frontend/GameOver";


function App() {
  // State to track if the game has started
  const [timer, setTimer] = useState(6);
  const [TimerIsActive, setTimerIsActive] = useState(false);
  const [points, setPoints] = useState(0);
  const [currentDisplay, setCurrentDisplay] = useState("mainMenu");

  const handlePointChange = (newPoints) => {
    setPoints(newPoints);
  };

  useEffect(() => { //timer of the game
    let interval;

    if (TimerIsActive && timer > 0) {

        interval = setInterval(() => {
          setTimer((prevSeconds) => prevSeconds - 1);
        }, 1000);
    } else if (!TimerIsActive && timer !== 120) {
        clearInterval(interval);
    }

    if (timer === 0){
      setCurrentDisplay("GameOver");
    }

    return () => clearInterval(interval);

}, [TimerIsActive, timer])

  // Function to start the game
  const startGame = () => {
    // Perform any game initialization here
    setCurrentDisplay("gameStart");
    setTimerIsActive(true);
  };

  const endGame = () => {
    // Perform any game initialization here
    setCurrentDisplay("mainMenu");
    setTimerIsActive(false);
    setTimer(6);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 max-w-sm bg-gray-200 rounded-xl shadow-md flex items-center space-x-4">
        <h1 className="text-xl font-bold">Color Game</h1>
        

        <div className="Main-Menu">

          {currentDisplay === "mainMenu" && (
            <button
              onClick={startGame}
              className="btn btn-green flex justify-center w-full"
            >
              Start Game
            </button>
          )}

          {currentDisplay === "gameStart" && (
            <div>
              <div className="timer">
                <p>Time: {timer}</p>
              </div>

              <StartGame onValueChange={handlePointChange} />

              <div className="endGame mt-4">
                <button onClick={endGame} className="btn btn-red">
                  End Game
                </button>
              </div>
            </div>
          )}

          {currentDisplay === "GameOver" && (
            <div>
            <GameOver Score={points}/>
            <div className="endGame mt-4">
                <button onClick={endGame} className="btn btn-red">
                  End Game
                </button>
              </div>
            </div>
          )}



        </div>
      </div>
    </div>
  );
}

export default App;
