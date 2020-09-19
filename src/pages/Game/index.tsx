import React from 'react';
import Styled, { Chessboard } from './styles';

const Game: React.FC = () => {
  return (
    <Styled>
      <Chessboard position="start" />
    </Styled>
  );
};

export default Game;
