import { useState } from "react";
import "./App.css";
import { Grid } from "./components/Grid";
import { Header } from "./components/Header";
import { NextTurn } from "./components/NextTurn";

const App = () => {
  const [CurrentTurn, setXTurn] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [endGame, setEndGame] = useState(false);

  const EndofGame = () => {
    const winner = CurrentTurn ? "O" : "X";
    return `${winner}'s won`;
  };
  const handleRestart = () => {
    console.log("restart");
    setXTurn(true);
    setSquares(Array(9).fill(null));
    setEndGame(false);
  };

  return (
    <div className="App">
      <div>
        <Header />
        <NextTurn xTurn={CurrentTurn} />
        <Grid
          endGame={endGame}
          setEndGame={setEndGame}
          squares={squares}
          setSquares={setSquares}
          xTurn={CurrentTurn}
          setXTurn={setXTurn}
        />
        {endGame ? (
          <>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "500",
                height: "10vh",
              }}
            >
              {EndofGame()}
            </div>
            <button style={{height: "10vh", fontWeight: "700"}}  onClick={() => handleRestart()}>Restart Game</button>
          </>
        ) : (
          <div
            style={{
              height: "20vh",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export { App };
