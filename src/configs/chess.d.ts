declare module 'chess.js' {
  export interface MoveProps {
    sourceSquare: string;
    targetSquare: string;
    piece: string;
  }

  export interface ChessMoveProps {
    captured?: string;
    color?: string;
    flags?: string;
    from: string;
    piece?: string;
    promotion?: string;
    san?: string;
    to: string;
  }

  // TODO: Check the possibility to make chessMoveProps interface dynamic regarding the requirement from the attributes
  export interface ChessProps {
    move: (args: ChessMoveProps) => ChessMoveProps;
    fen: (args?: unknown) => unkwnown;
  }
}
