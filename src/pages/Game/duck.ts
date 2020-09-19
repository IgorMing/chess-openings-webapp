import { COLOR, GameActions, GameModuleAction, GameModuleState } from './types';

const INITIAL_STATE: GameModuleState = {
  whiteHistory: [],
  whiteOpening: undefined
};

// Reducer
export default function reducer(
  state = INITIAL_STATE,
  action: GameModuleAction
): typeof INITIAL_STATE {
  switch (action.type) {
    case GameActions.SET_WHITE_MOVE:
      return {
        ...state,
        whiteHistory: [...state.whiteHistory, action.payload]
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
