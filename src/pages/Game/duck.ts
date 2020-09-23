import { ChessMoveProps } from 'chess.js';
import { Dispatch, GetState, ThunkAction } from '../../configs/common-types';
import data from '../../configs/data.json';
import {
  GameActions,
  GameModuleAction,
  GameModuleState,
  Opening
} from './types';
import { getHistory } from './selectors';

const INITIAL_STATE: GameModuleState = {
  history: [],
  openings: []
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
    case GameActions.SET_OPENING:
      return {
        ...state,
        openings: [...state.openings, action.payload]
      };
    default:
      return state;
  }
}

// Action Creators
export function setHistory(history: Array<ChessMoveProps>): ThunkAction {
  return (dispatch: Dispatch, getState: GetState): void => {
    dispatch({
      type: GameActions.SET_HISTORY,
      payload: history
    });

    dispatch(checkOpening(getHistory(getState())));
  };
}

function matchData(key: 'white' | 'black', compare: Array<string>): Opening[] {
  return data.filter((opening) =>
    opening[key].every((each) => compare.includes(each))
  );
}

export function checkOpening({
  whiteHistory,
  blackHistory
}: {
  whiteHistory: Array<string>;
  blackHistory: Array<string>;
}): ThunkAction {
  return (dispatch: Dispatch): void => {
    const matchWhite = matchData('white', whiteHistory);
    const matchBlack = matchData('black', blackHistory);

    if (matchWhite.length && matchBlack.length) {
      // for consider the opening, it must be present in both white and black matches
      const [found] = matchWhite.filter((eachWhite) =>
        matchBlack.find((eachBlack) => eachBlack.eco === eachWhite.eco)
      );

      if (found) {
        dispatch({ type: GameActions.SET_OPENING, payload: found });
      }
    }
  };
}
