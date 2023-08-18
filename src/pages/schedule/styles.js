import styled from 'styled-components';

export const StyledSchedule = styled.div`
  display: flex;
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
