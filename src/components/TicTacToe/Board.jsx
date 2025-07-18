import { useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next player : " + (xIsNext ? "X" : "O");
  }
  const clickSquare = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  function calculateWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} clickSquare={() => clickSquare(0)} />
        <Square value={squares[1]} clickSquare={() => clickSquare(1)} />
        <Square value={squares[2]} clickSquare={() => clickSquare(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} clickSquare={() => clickSquare(3)} />
        <Square value={squares[4]} clickSquare={() => clickSquare(4)} />
        <Square value={squares[5]} clickSquare={() => clickSquare(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} clickSquare={() => clickSquare(6)} />
        <Square value={squares[7]} clickSquare={() => clickSquare(7)} />
        <Square value={squares[8]} clickSquare={() => clickSquare(8)} />
      </div>
    </>
  );
};
