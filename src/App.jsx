import "./App.css";
import Square from "./components/Square";
function App() {
  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>

      <div className="board">
        <Square />
        <Square />
<Square />

<Square />
<Square />
<Square />

<Square />
<Square />
<Square />
      </div>
    </div>
  );
}

export default App;