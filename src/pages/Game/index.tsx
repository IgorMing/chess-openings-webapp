import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../reducers';
import { setMove } from './duck';
import Styled, { Chessboard } from './styles';

const Game: React.FC = () => {
  const game = useTypedSelector((state) => state.game);
  const dispatch = useDispatch();

  return (
    <Styled>
      <button onClick={() => dispatch(setMove())}>click me</button>
      <Chessboard position="start" />
    </Styled>
  );
};

export default Game;
