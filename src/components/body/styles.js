import styled from 'styled-components';

export const StyledBody = styled.div`
  background-color: #f4f0ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  img {
    max-height: 154px;
    width: auto;
    height: auto;
  }
  .bodyTitle {
    display: flex;
    justify-content: center;
    font-family: 'Brittany Signature', sans-serif;
    font-size: 70px;
    background: -webkit-linear-gradient(#d0c021d9, #846904ad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }

  hr {
    border: 0;
    margin: 1.35em auto;
    max-width: 100%;
    background-position: 50%;
    box-sizing: border-box;
    width: 65%;
    border-style: solid;
    border-color: hsla(0, 0%, 75%, 0.9);
    border-width: 1px 0 0 0;
  }

  .decoImg {
    max-height: 90px;
    width: auto;
    height: auto;
  }
`;
