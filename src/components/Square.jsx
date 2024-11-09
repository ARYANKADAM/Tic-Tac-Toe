import React from 'react';

const Square = ({ value, onSquareClick, isWinningSquare }) => (
  <button 
    className={`w-16 h-16 border border-gray-300 text-2xl font-bold ${
      isWinningSquare ? 'bg-green-200' : 'bg-white hover:bg-stone-100'
    }`}
    onClick={onSquareClick}
  >
    {value}
  </button>
);

export default Square;