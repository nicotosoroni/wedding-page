import styled from 'styled-components';

export const StyledGift = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .decoImg img {
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
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: rgb(193 188 140);
  color: black;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
`;
