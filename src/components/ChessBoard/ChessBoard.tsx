import React, { useMemo, memo } from "react";

interface ChessBoardProps {
  size: number;
}

const ChessBoard: React.FC<ChessBoardProps> = ({ size }) => {
  const generateArray = (size: number): boolean[][] => {
    return Array.from({ length: size }, (_, row) =>
      Array.from({ length: size }, (_, col) => (row + col) % 2 === 0)
    );
  };

  const boardArray = useMemo(() => generateArray(size), [size]);

  return (
    <>
      {size >= 2 ? (
        <div
          className="grid gap-0.5 border border-gray-800 flex flex-col items-center p-6 bg-gray-500"
          style={{ gridTemplateColumns: `repeat(${size}, 40px)` }}
        >
          {boardArray.flat().map((isWhite, index) => (
            <div
              key={index}
              className={`w-10 h-10 ${isWhite ? "bg-white" : "bg-gray-800"}`}
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-0.5 border border-gray-800 flex flex-col items-center p-6">
          Nothing to show.
        </div>
      )}
    </>
  );
};

export default memo(ChessBoard);
  