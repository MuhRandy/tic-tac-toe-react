import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const handleClick = (i) => {
    if (squares[i] || calculatedWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xTurn ? "X" : "O";
    setSquares(nextSquares);
    setXTurn(!xTurn);
  };

  const winner = calculatedWinner(squares);

  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = (xTurn ? "X" : "O") + " Player Turn";
  }
  console.log(status);

  return (
    <>
      <h1>{status}</h1>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

function calculatedWinner(squares) {
  // add lines array that fulfill win condition
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return false;
}

export default Board;
