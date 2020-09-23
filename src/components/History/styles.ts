import styled from 'styled-components';

export default styled.div`
  flex: 1;
  padding-top: 15px;
  padding-left: ${({ theme }) => theme.measures.horizontalDistance}px;
  padding-right: ${({ theme }) => theme.measures.horizontalDistance}px;

  .list-inline {
    width: ${window.screen.availWidth * 0.9}px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 15px 0;

    .list-inline--item {
      display: inline-block;
      padding-right: 15px;
    }
  }
`;
