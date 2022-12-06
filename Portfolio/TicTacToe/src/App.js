import { useState } from "react";
import "./App.css";
import { Grid } from "./components/Grid";
import { Header } from "./components/Header";
import { NextTurn } from "./components/NextTurn";

export const App = () => {
  const [xTurn, setXTurn] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))


  const handleClick = (i) => {
    squares[i] = xTurn ?  'X' : 'O';
    setSquares(squares)
    setXTurn(!xTurn);
}


  return (
    <div className="App">
      <Header />
      <Grid squares={squares} handleClick={handleClick} />
      <NextTurn xTurn={xTurn}/>
    </div>
  );
};
