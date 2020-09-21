import Chess, { ChessMoveProps, MoveProps } from 'chess.js';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import History from '../../components/History';
import { useTypedSelector } from '../../reducers';
import { setHistory } from './duck';
import { getShownHistory } from './selectors';
import Styled, { Chessboard } from './styles';

const Game: React.FC = () => {
  // @ts-ignore
  const [game] = useState(new Chess());
  const [fen, setFen] = useState<string>('start');
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const shownHistory = useTypedSelector(getShownHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHistory(game.history({ verbose: true })));
  }, [dispatch, game]);
  console.log(shownHistory);

  function saveNewLayout(move: ChessMoveProps) {
    if (move === null) {
      return;
    }

    dispatch(setHistory(game.history({ verbose: true })));
    setFen(game.fen());
    setSelectedSquare(null);
  }

  function onDrop(move: MoveProps) {
    saveNewLayout(
      game.move({
        from: move.sourceSquare,
        to: move.targetSquare
      })
    );
  }

  function onSquareClick(square: string) {
    if (selectedSquare === null) {
      setSelectedSquare(square);
      return;
    }

    if (selectedSquare === square) {
      setSelectedSquare(null);
    }

    saveNewLayout(
      game.move({
        from: selectedSquare,
        to: square
      })
    );
  }

  return (
    <Styled>
      <History data={shownHistory} />
      <section className="board">
        <Chessboard
          position={fen}
          onDrop={onDrop}
          onSquareClick={onSquareClick}
        />
      </section>
    </Styled>
  );
};

export default Game;
