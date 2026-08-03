import "./App.css";
import Square from "./components/Square";

function App() {
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>

      <div className="board">
        <Square value="X" />
        <Square value="O" />
        <Square value="X" />

        <Square value="O" />
        <Square value="X" />
        <Square value="O" />

        <Square value="X" />
        <Square value="O" />
        <Square value="X" />
      </div>
    </div>
  );
}

export default App;