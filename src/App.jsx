import React, { useState, useEffect } from "react";
import StartGame from "./ColorGame";

function App() {
  // State to track if the game has started
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [TimerIsActive, setTimerIsActive] = useState(false);

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
      endGame();
    }

    return () => clearInterval(interval);

}, [TimerIsActive, timer])

  // Function to start the game
  const startGame = () => {
    // Perform any game initialization here
    setGameStarted(true);
    setTimerIsActive(true);
  };

  const endGame = () => {
    // Perform any game initialization here
    setGameStarted(false);
    setTimerIsActive(false);
    setTimer(60);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 max-w-sm bg-gray-200 rounded-xl shadow-md flex items-center space-x-4">
        <h1 className="text-xl font-bold">Color Game</h1>

        <div className="Main-Menu">
          {gameStarted ? (
            <div>

              <div className="timer">
                <p>Time: {timer}</p>
              </div>

              <StartGame />

              <div className="endGame mt-4">
                <button onClick={endGame} className="btn btn-red">
                  End Game
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={startGame}
              className="btn btn-green flex justify-center w-full"
            >
              Start Game
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
