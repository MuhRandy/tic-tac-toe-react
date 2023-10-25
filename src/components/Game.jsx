import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [xTurn, setXTurn] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXTurn(!xTurn);
  }

  const moves = history.map((squares, move) => {
    let description = "";

    move > 0
      ? (description = "Go to move #" + move)
      : (description = "Go to game start");

    return (
      <li key={move}>
        <button onClick={() => jumpTo(squares)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xTurn={xTurn} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
