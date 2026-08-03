function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="
        aspect-square
        w-full
        rounded-2xl
        border
        border-white/20
        bg-white/10
        text-5xl
        font-bold
        text-white
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-300
        hover:bg-white/20
        hover:scale-105
        active:scale-95
      "
    >
      {value}
    </button>
  );
}

export default Square;