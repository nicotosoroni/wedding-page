import styled from 'styled-components';

export const FAQStyles = styled.div`
  .decoImg {
    display: flex;
    justify-content: center;
    img {
      max-height: 90px;
      width: auto;
      height: auto;
    }
  }
  .pepito1 {
    height: 900px;
    width: 100%;
    background: url(${(props) => props.photo1}) no-repeat center;
    background-size: cover;
    background-attachment: fixed;
  }

  .pepito2 {
    height: 900px;
    width: 100%;
    background: url(${(props) => props.photo2}) no-repeat center;
    background-size: cover;
  }
`;
