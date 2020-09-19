declare module 'chess.js' {
  export interface MoveProps {
    sourceSquare: string;
    targetSquare: string;
    piece: string;
  }

  interface MoveArgs {
    captured: string;
    color?: string;
    flags?: string;
    from: string;
    piece?: string;
    promotion?: string;
    san?: string;
    to: string;
  }

  export interface ChessProps {
    move: (args: MoveArgs) => any;
    fen: (args?: any) => any;
  }
}
