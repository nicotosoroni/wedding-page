import styled from 'styled-components';

export const StyledSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .decoImg img {
    max-height: 90px;
    width: auto;
    height: auto;
  }
  li {
    list-style-type: none;
    font-family: monospace;
  }
  .hour li {
    text-align: end;
  }
  .activity li {
    padding-inline-start: 5px;
  }
  .fondoImg {
    position: fixed;
    bottom: 0;
    & img {
      width: 70%;
      @media (max-width: 500px) {
        width: 100%;
      }
    }
  }
`;
