import styled from 'styled-components';

export const StyledMap = styled.div`
  .decoImg {
    display: flex;
    justify-content: center;
    img {
      max-height: 90px;
      width: auto;
      height: auto;
    }
  }
  .esquinaSup {
    position: fixed;
    top: 0;
    right: 0;
    & img {
      height: 450px;
      @media (max-width: 500px) {
        width: 145px;
        height: auto;
      }
    }
  }
  .esquinaInf {
    position: fixed;
    bottom: 0;
    left: 0;
    & img {
      height: 450px;
      @media (max-width: 500px) {
        width: 145px;
        height: auto;
      }
    }
  }
`;
