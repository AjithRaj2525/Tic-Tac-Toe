// Square is a reusable component.
// It receives:
// value -> X, O, or null
// onSquareClick -> function to run when the square is clicked

function Square({ value, onSquareClick }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;