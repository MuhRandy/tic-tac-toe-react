import calculatedWinner from "../functions/calculatedWinner";
import Square from "./Square";

const Board = ({ xTurn, squares, onPlay }) => {
  const handleClick = (i) => {
    if (squares[i] || calculatedWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xTurn ? "X" : "O";

    onPlay(nextSquares);
  };

  const winner = calculatedWinner(squares);

  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = (xTurn ? "X" : "O") + " Player Turn";
  }

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

export default Board;
