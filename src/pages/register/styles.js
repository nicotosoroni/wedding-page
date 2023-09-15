import styled from 'styled-components';

export const StyledRegister = styled.div`
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
    left: 0;
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
    right: 0;
    & img {
      height: 450px;
      @media (max-width: 500px) {
        width: 145px;
        height: auto;
      }
    }
  }
`;

export const FormularioContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  & div {
    margin: 10px 0;
  }
  & label {
    padding-right: 10px;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Select = styled.select`
  font-size: 16px;
  padding: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: rgb(193 188 140);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
