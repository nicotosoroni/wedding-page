import { Link } from 'react-router-dom';
import { NavbarStyles } from './styles';

const Navbar = () => {
  return (
    <>
      <NavbarStyles>
        <Link className="fromcenter f1" to="/">
          Home
        </Link>
        <Link className="fromcenter f1" to="/pages/schedule">
          Cronograma
        </Link>
        <Link className="fromcenter f1" to="/pages/map">
          Mapa
        </Link>
        <Link className="fromcenter f1" to="/pages/photos">
          Photos
        </Link>
        <Link className="fromcenter f1" to="/pages/spotify">
          Music
        </Link>
        <Link className="fromcenter f1" to="/pages/register">
          Registry
        </Link>
        <Link className="fromcenter f1" to="/pages/faq">
          FAQs
        </Link>
      </NavbarStyles>
    </>
  );
};
export default Navbar;
