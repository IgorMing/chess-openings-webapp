import styled from 'styled-components';

export default styled.div`
  flex: 1;

  .list-inline {
    width: ${window.screen.availWidth * 0.9}px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 15px ${({ theme }) => theme.measures.horizontalDistance}px;

    .list-inline--item {
      display: inline-block;
      padding-right: 15px;
    }
  }
`;
