import React, { useState } from "react";
import { Cell } from "./Cell";

const Grid = ({ squares, handleClick }) => {

    const winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
  
  
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i]
  
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log('win')
        console.log(squares)
      }
    }



    // for (let i = 1; i <= cellAmount; i++) {
    //   grid.push(
    //     <Cell content={i}></Cell>
    //   );
    // }

  return (
    <div style={{ height: "500px", width: "500px", display: "grid", gridTemplateColumns: "33% 33% 33%" }}>
      <Cell key={0} value={squares[0]} handleClick={() => handleClick(0)} />
      <Cell key={1} value={squares[1]} handleClick={() => handleClick(1)} />
      <Cell key={2} value={squares[2]} handleClick={() => handleClick(2)} /> 
      <Cell key={3} value={squares[3]} handleClick={() => handleClick(3)} />
      <Cell key={4} value={squares[4]} handleClick={() => handleClick(4)} />
      <Cell key={5} value={squares[5]} handleClick={() => handleClick(5)} />
      <Cell key={6} value={squares[6]} handleClick={() => handleClick(6)} />
      <Cell key={7} value={squares[7]} handleClick={() => handleClick(7)} />
      <Cell key={8} value={squares[8]} handleClick={() => handleClick(8)} />
    </div>
    // <div style={{ display: "grid",  }}>
    //   {grid}
    // </div>
  );
};

export { Grid };
