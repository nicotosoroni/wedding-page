import styled from 'styled-components';

export const StyledSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-height: 90px;
    width: auto;
    height: auto;
    margin-bottom: 30px;
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
`;
