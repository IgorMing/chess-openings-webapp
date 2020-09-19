import styled from 'styled-components';
import DefaultChessboard from 'chessboardjsx';

console.log(window.screen.width);

export default styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Chessboard = styled(DefaultChessboard).attrs({
  width: window.screen.availWidth
})``;
