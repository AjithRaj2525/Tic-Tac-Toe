import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [board, setBoard] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);

  function handleClick() {
    const newBoard = [...board];

    newBoard[0] = "X";

    setBoard(newBoard);
  }

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>

      <div className="board">
        <Square value={board[0]} onSquareClick={handleClick} />
        <Square value={board[1]} />
        <Square value={board[2]} />

        <Square value={board[3]} />
        <Square value={board[4]} />
        <Square value={board[5]} />

        <Square value={board[6]} />
        <Square value={board[7]} />
        <Square value={board[8]} />
      </div>
    </div>
  );
}

export default App;