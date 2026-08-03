import { useState } from "react";
import Square from "./components/Square";
import "./App.css";

function App() {

  // Stores all 9 squares.
  // Initially every square is empty (null).
  const [board, setBoard] = useState(Array(9).fill(null));

  // Keeps track of whose turn it is.
  // true  -> X
  // false -> O
  const [xIsNext, setXIsNext] = useState(true);

  //--------------------------------------------------
  // Function to check if there is a winner
  //--------------------------------------------------

  function calculateWinner(board) {

    // Every possible winning combination
    const winningLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],

      [0,3,6],
      [1,4,7],
      [2,5,8],

      [0,4,8],
      [2,4,6]
    ];

    // Check each winning line
    for (let line of winningLines) {

      const [a,b,c] = line;

      // If all three squares contain the same symbol,
      // we have a winner.
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }

    return null;
  }

  //--------------------------------------------------
  // Called whenever a square is clicked
  //--------------------------------------------------

  function handleClick(index) {

    // Create a copy of the board.
    // Never modify state directly.
    const newBoard = [...board];

    // If square already filled, do nothing.
    if (newBoard[index]) return;

    // If game already has a winner, stop.
    if (calculateWinner(board)) return;

    // Place X or O
    newBoard[index] = xIsNext ? "X" : "O";

    // Update board
    setBoard(newBoard);

    // Switch turns
    setXIsNext(!xIsNext);
  }

  //--------------------------------------------------
  // Restart Game
  //--------------------------------------------------

  function restartGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  //--------------------------------------------------
  // Winner / Draw / Turn
  //--------------------------------------------------

  const winner = calculateWinner(board);

  // If every square is filled and no winner,
  // then it's a draw.
  const isDraw =
    !winner &&
    board.every(square => square !== null);

  let status;

  if (winner) {
    status = `Winner : ${winner}`;
  }
  else if (isDraw) {
    status = "It's a Draw!";
  }
  else {
    status = `Next Player : ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="container">

      <h1>Tic Tac Toe</h1>

      <h2>{status}</h2>

      <div className="board">

        {board.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}

      </div>

      <button
        className="restart"
        onClick={restartGame}
      >
        Restart Game
      </button>

    </div>
  );
}

export default App;