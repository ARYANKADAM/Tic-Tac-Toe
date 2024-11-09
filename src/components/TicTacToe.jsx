import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import Board from './Board';
import { calculateWinner } from '../utils/gameLogic';

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handlePlay = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const result = calculateWinner(squares);
  let status;
  if (result?.winner === 'Draw') {
    status = "Game Over - It's a Draw!";
  } else if (result?.winner) {
    status = `Winner: ${result.winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="text-xl mb-4">{status}</div>
      <Board 
        squares={squares} 
        onPlay={handlePlay}
        winningLine={result?.line}
      />
      <button
        onClick={resetGame}
        className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        <RefreshCw size={20} />
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;