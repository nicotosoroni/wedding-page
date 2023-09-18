import styled from 'styled-components';

export const StyledMediaPlayer = styled.div`
  .music {
    width: 128px;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 1070px) {
      flex-direction: column;
      width: 36px;
    }
    & button {
      padding: 6px 0;
    }
  }
`;
