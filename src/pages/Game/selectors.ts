import { RootState } from '../../reducers';
import { COLOR } from './types';

export function getHistoryByColor(color: COLOR) {
  return (state: RootState): Array<string> =>
    state.game.history
      .filter((each) => each.color === color)
      .map((each) => each.san ?? '');
}

export function getHistory(state: RootState) {
  const blackHistory = getHistoryByColor(COLOR.BLACK)(state);
  const whiteHistory = getHistoryByColor(COLOR.WHITE)(state);

  return { whiteHistory, blackHistory };
}

export function getFlatHistory(state: RootState): Array<string> {
  return state.game.history.map((each) => each.san ?? '');
}

export function getShownHistory(state: RootState): Array<string> {
  const { history } = state.game;
  const shownHistory: Array<string> = [];

  history.forEach((each, index) => {
    if (index % 2 === 0) {
      shownHistory[index / 2] = each.san ?? '';
    } else {
      const i = (index - 1) / 2;
      const parsedIndex = parseInt(i.toString());
      shownHistory[parsedIndex] = `${shownHistory[parsedIndex]} ${each.san}`;
    }
  });

  return shownHistory;
}
