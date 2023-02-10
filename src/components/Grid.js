import React from "react";
import { Cell } from "./Cell";

const Grid = ({
  endGame,
  setEndGame,
  squares,
  setSquares,
  xTurn,
  setXTurn,
}) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (i) => {
    squares[i] = xTurn ? "X" : "O";
    setSquares(squares);
    setXTurn((previous) => !previous);

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setEndGame(true);
        console.log(endGame);
        return squares[a];
      }
    }
  };
  const renderSquare = (i) => {
    return (
      <Cell
        key={i}
        endGame={endGame}
        setEndgame={setEndGame}
        squares={squares}
        setSquares={setSquares}
        value={squares[i]}
        xTurn={xTurn}
        setXTurn={setXTurn}
        handleClick={() => handleClick(i)}
      />
    );
  };

  return (
    <div
      style={{
        height: "500px",
        width: "500px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "opx",
      }}
    >
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  );
};

export { Grid };
