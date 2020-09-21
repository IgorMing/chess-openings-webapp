declare module 'chess.js' {
  export interface MoveProps {
    sourceSquare: string;
    targetSquare: string;
    piece: string;
  }

  interface ChessMoveProps {
    captured?: string;
    color?: string;
    flags?: string;
    from: string;
    piece?: string;
    promotion?: string;
    san?: string;
    to: string;
  }

  export interface ChessProps {
    move: (args: ChessMoveProps) => any;
    fen: (args?: any) => any;
  }
}
