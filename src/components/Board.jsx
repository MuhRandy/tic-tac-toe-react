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
    status = "Player " + (xTurn ? "X" : "O") + " Turn";
  }

  let squaresComponent = [];
  squares.forEach((square, index) => {
    squaresComponent.push(
      <Square
        key={index}
        value={square}
        onSquareClick={() => handleClick(index)}
      />
    );
  });

  return (
    <>
      <h1>{status}</h1>
      <div className="board">{squaresComponent}</div>
    </>
  );
};

export default Board;
