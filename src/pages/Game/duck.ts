import { ChessMoveProps } from 'chess.js';
import { COLOR, GameActions, GameModuleAction, GameModuleState } from './types';

const INITIAL_STATE: GameModuleState = {
  history: [],
  whiteOpening: undefined
};

// Reducer
export default function reducer(
  state = INITIAL_STATE,
  action: GameModuleAction
): typeof INITIAL_STATE {
  switch (action.type) {
    case GameActions.SET_HISTORY:
      return {
        ...state,
        history: action.payload
      };
    default:
      return state;
  }
}

// Action Creators
export function setMove(color?: COLOR) {
  return {
    type: GameActions.SET_WHITE_MOVE,
    payload: 'e5'
  };
}

export function setHistory(history: Array<ChessMoveProps>) {
  return {
    type: GameActions.SET_HISTORY,
    payload: history
  };
}
