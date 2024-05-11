import React, { useState } from "react";
import StartGame from "./ColorGame";

function App() {
  // State to track if the game has started
  const [gameStarted, setGameStarted] = useState(false);

  // Function to start the game
  const startGame = () => {
    // Perform any game initialization here
    setGameStarted(true);
  };

  const endGame = () => {
    // Perform any game initialization here
    setGameStarted(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 max-w-sm bg-gray-200 rounded-xl shadow-md flex items-center space-x-4">
        <h1 className="text-xl font-bold">Color Game</h1>

        <div className="Main-Menu">
          {gameStarted ? (
            <div>
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
