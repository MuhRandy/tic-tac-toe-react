const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="w-[55px] h-[55px] border border-black bg-white text-xl font-bold cursor-pointer flex justify-center items-center"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
