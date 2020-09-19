export const GameActions = {
  SET_WHITE_MOVE: 'GAME/SET_WHITE_MOVE',
  SET_WHITE_OPENING: 'GAME/SET_WHITE_OPENING'
};

export enum COLOR {
  WHITE = 'white',
  BLACK = 'black'
}

interface Opening {
  name: string;
}

export interface GameModuleState {
  whiteHistory: Array<string>;
  whiteOpening?: Opening;
}

export interface GameModuleAction {
  type: string;
  payload?: any;
}
