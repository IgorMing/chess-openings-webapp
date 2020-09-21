import Chess, { MoveProps } from 'chess.js';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setHistory } from './duck';
import Styled, { Chessboard } from './styles';
import { useTypedSelector } from '../../reducers';
import {
  getFlatHistory,
  getHistoryByColor,
  getShownHistory
} from './selectors';
import { COLOR } from './types';
import History from '../../components/History';

const Game: React.FC = () => {
  // @ts-ignore
  const [game] = useState(new Chess());
  const [fen, setFen] = useState<string>('start');
  const shownHistory = useTypedSelector(getShownHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHistory(game.history({ verbose: true })));
  }, [dispatch, game]);
  console.log(shownHistory);

  function onDrop(move: MoveProps) {
    const _move = game.move({
      from: move.sourceSquare,
      to: move.targetSquare
    });

    if (_move === null) {
      return;
    }

    dispatch(setHistory(game.history({ verbose: true })));

    const fen = game.fen();
    setFen(fen);
  }

  return (
    <Styled>
      <History data={shownHistory} />
      <section className="board">
        <Chessboard position={fen} onDrop={onDrop} />
      </section>
    </Styled>
  );
};

export default Game;
