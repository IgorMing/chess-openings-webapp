import DefaultChessboard from 'chessboardjsx';
import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};

  section.board {
    flex: 9;
  }
`;

export const Chessboard = styled(DefaultChessboard).attrs({
  width: window.screen.availWidth
})``;
