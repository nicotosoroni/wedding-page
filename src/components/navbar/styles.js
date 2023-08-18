import styled from 'styled-components';

export const NavbarStyles = styled.div`
  width: 75%;
  margin: 15px auto;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: 'Comfortaa', cursive;

  a {
    height: auto;
    font-size: 20px;
    text-align: center;
    color: #000;
    opacity: 0.8;
    text-decoration: none;
  }

  a:after {
    display: block;
    content: '';
    border-bottom: solid 1px #000;
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
  }

  a:hover:after {
    transform: scaleX(1);
  }

  a.fromright:after {
    transform-origin: 100% 50%;
  }

  a.fromleft:after {
    transform-origin: 0 50%;
  }
`;
