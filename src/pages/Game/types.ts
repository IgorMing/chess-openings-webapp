import { ChessMoveProps } from 'chess.js';

export const GameActions = {
  SET_WHITE_MOVE: 'GAME/SET_WHITE_MOVE',
  SET_HISTORY: 'GAME/SET_HISTORY',
  SET_WHITE_OPENING: 'GAME/SET_WHITE_OPENING'
};

export enum COLOR {
  WHITE = 'w',
  BLACK = 'b'
}

interface Opening {
  name: string;
}

export interface GameModuleState {
  history: Array<ChessMoveProps>;
  whiteOpening?: Opening;
}

export interface GameModuleAction {
  type: string;
  payload?: any;
}
