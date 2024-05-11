import React from "react";
import { useState } from "react";
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
    <div className="App">
      <h1>Color Game</h1>


      <div className="Main-Menu">

        {gameStarted ? (
          <div>
            <StartGame/>

            <div className="endGame">
              <button onClick={endGame}>End Game</button>
            </div>
          </div>

        ) : (
          <button onClick={startGame}>Start Game</button>
        )}
      </div>
      
      
    </div>
  );
}

export default App;
