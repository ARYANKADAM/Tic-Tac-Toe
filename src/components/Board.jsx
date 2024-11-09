import React from 'react';
import Square from './Square';
import { calculateWinner } from '../utils/gameLogic';

const Board = ({ squares, onPlay, winningLine }) => {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    onPlay(i);
  };

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onSquareClick={() => handleClick(i)}
      isWinningSquare={winningLine?.includes(i)}
    />
  );

  return (
    <div className="grid grid-cols-3 gap-1 ">
      {[...Array(9)].map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;