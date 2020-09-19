import Chess, { MoveProps } from 'chess.js';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Styled, { Chessboard } from './styles';

const Game: React.FC = () => {
  const [fen, setFen] = useState<string>('start');
  // const game = useTypedSelector((state) => state.game);
  const dispatch = useDispatch();
  // @ts-ignore
  const [game] = useState(new Chess());

  function onDrop(move: MoveProps) {
    game.move({
      from: move.sourceSquare,
      to: move.targetSquare
    });

    const fen = game.fen();
    setFen(fen);
  }

  return (
    <Styled>
      <Chessboard position={fen} onDrop={onDrop} />
    </Styled>
  );
};

export default Game;
