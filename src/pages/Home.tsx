import React from "react";
import ChessBoardContainer from "../components/ChessBoard/ChessBoardContainer";

const Home: React.FC<{}> = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-8 w-fit-content">
      <ChessBoardContainer />
    </div>
  );
};

export default Home;