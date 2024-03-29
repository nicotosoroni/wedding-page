import styled from 'styled-components';

export const StyledPhotos = styled.div`
  .decoImg {
    display: flex;
    justify-content: center;

    img {
      max-height: 90px;
      width: auto;
      height: auto;
    }
  }
  .decoImg2 {
    display: flex;
    justify-content: center;
    @media (max-width: 500px) {
      display: none;
    }
    img {
      max-height: 90px;
      width: auto;
      height: auto;
    }
  }
  svg {
    border: 3px solid black;
    color: black;
    font-weight: 500;
    width: 55px;
    height: 55px;
    /* border: none; */
    background: rgb(214, 214, 214);
    box-shadow: rgb(35 75 41 / 30%) 0px 0px 10px,
      rgb(30 81 18 / 83%) 0px 0px 40px, rgb(103 99 44) 0px 0px 80px;
  }
  .fondoImg {
    position: fixed;
    bottom: 0;
    & img {
      width: 50%;
      @media (max-width: 500px) {
        width: 100%;
      }
    }
  }
  .esquinaSup {
    position: fixed;
    top: 0;
    left: 0;
    & img {
      height: 360px;
      @media (max-width: 500px) {
        width: 145px;
        height: auto;
      }
    }
  }
  .esquinaInf {
    position: fixed;
    bottom: 0;
    right: 0;
    & img {
      height: 360px;
      @media (max-width: 500px) {
        width: 145px;
        height: auto;
      }
    }
  }
`;
