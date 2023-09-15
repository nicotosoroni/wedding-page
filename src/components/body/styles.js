import styled from 'styled-components';

export const StyledBody = styled.div`
  background-color: #f4f0ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  /* img {
    max-height: 154px;
    width: auto;
    height: auto;
  } */
  .bodyTitle {
    max-width: 530px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Brittany Signature', sans-serif;
    font-size: 70px;
    background: -webkit-linear-gradient(#d0c021d9, #846904ad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    @media (max-width: 900px) {
      max-width: 470px;
      font-size: 60px;
    }
    @media (max-width: 700px) {
      max-width: 400px;
      font-size: 50px;
    }
    @media (max-width: 500px) {
      max-width: 330px;
      font-size: 40px;
    }
    & span {
      text-align: center;
    }
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
    max-height: 130px;
    width: auto;
    height: auto;
    @media (max-width: 900px) {
      max-height: 110px;
    }
    @media (max-width: 700px) {
      max-height: 90px;
    }
    @media (max-width: 500px) {
      max-height: 80px;
    }
  }

  .clothes h2 {
    font-size: 50px;
    @media (max-width: 900px) {
      font-size: 50px;
    }
    @media (max-width: 700px) {
      font-size: 50px;
    }
    @media (max-width: 500px) {
      font-size: 25px;
    }
  }
  .music {
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

export const Button = styled.button`
  padding: 10px 20px;
  background-color: rgb(193 188 140);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
