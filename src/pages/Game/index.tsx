import Chess, { ChessMoveProps, MoveProps } from 'chess.js';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import History from '../../components/History';
import { useTypedSelector } from '../../reducers';
import { checkOpening, setHistory } from './duck';
import { getHistory, getShownHistory } from './selectors';
import Styled, { Chessboard } from './styles';
import { COLOR } from './types';

const Game: React.FC = () => {
  // @ts-ignore
  const [game] = useState(new Chess());
  const [layout, setLayout] = useState<string>('start');
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const shownHistory = useTypedSelector(getShownHistory);
  const { openings } = useTypedSelector((state) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHistory(game.history({ verbose: true })));
  }, [dispatch, game]);

  function saveNewLayout(move: ChessMoveProps) {
    if (move === null) {
      return;
    }

    dispatch(setHistory(game.history({ verbose: true })));
    setLayout(game.fen());
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

  function renderOpenings() {
    if (!openings.length) {
      return null;
    }

    const [opening] = openings;

    return (
      <>
        <div className="title">
          <h3>Abertura {opening.name}</h3>
          {!!opening.aka && !!opening.aka.length && (
            <span className="subtitle">(a.k.a.: {opening.aka[0]})</span>
          )}
        </div>
        <div className="buttons">
          <Button>Reiniciar jogo</Button>
          <Button>Ver detalhes</Button>
        </div>
      </>
    );
  }

  return (
    <Styled>
      <History data={shownHistory} />
      <section className="board">
        <Chessboard
          position={layout}
          onDrop={onDrop}
          onSquareClick={onSquareClick}
        />
      </section>
      <section className="openings">{renderOpenings()}</section>
    </Styled>
  );
};

export default Game;
