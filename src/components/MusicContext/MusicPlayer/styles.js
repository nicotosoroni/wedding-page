import styled from 'styled-components';

export const StyledMediaPlayer = styled.div`
  .music {
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 500px) {
      flex-direction: column;
    }
    & button {
      padding: 6px 0;
    }
  }
`;
