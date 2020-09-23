import DefaultChessboard from 'chessboardjsx';
import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};

  section.board {
    flex: 1;
  }

  section.openings {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 15px ${({ theme }) => theme.measures.horizontalDistance}px;

    .title {
      h3 {
        padding-bottom: 5px;
      }

      .subtitle {
        font-size: 14px;
        font-style: italic;
      }
    }

    .buttons {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;

export const Chessboard = styled(DefaultChessboard).attrs({
  width: window.screen.availWidth
})``;
