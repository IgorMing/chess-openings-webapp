import { ChessMoveProps } from 'chess.js';

export const GameActions = {
  SET_OPENING: 'GAME/SET_OPENING',
  SET_HISTORY: 'GAME/SET_HISTORY'
};

export enum COLOR {
  WHITE = 'w',
  BLACK = 'b'
}

export interface Opening {
  eco: string; // basically the ID (Encyclopedia of Chess Openings)
  name: string;
  aka: string[];
  white: string[];
  black: string[];
  description?: string;
  origin?: number | string;
}

export interface GameModuleState {
  history: ChessMoveProps[];
  openings: Opening[];
}

export interface GameModuleAction {
  type: string;
  payload?: any;
}
