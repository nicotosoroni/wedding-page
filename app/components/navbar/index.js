import Link from 'next/link';
import { NavbarStyles } from './styles';

const Navbar = () => {
  return (
    <>
      <NavbarStyles>
        <Link className="fromcenter f1" href="/">
          Home
        </Link>
        <Link className="fromcenter f1" href="/pages/Wedding">
          Wedding
        </Link>
        <Link className="fromcenter f1" href="/pages/Party">
          Party
        </Link>
        <Link className="fromcenter f1" href="/pages/schedule">
          Cronograma
        </Link>
        <Link className="fromcenter f1" href="/pages/map">
          Mapa
        </Link>
        <Link className="fromcenter f1" href="/pages/photos">
          Photos
        </Link>
        <Link className="fromcenter f1" href="/pages/register">
          Registry
        </Link>
        <Link className="fromcenter f1" href="/pages/faq">
          FAQs
        </Link>
      </NavbarStyles>
    </>
  );
};
export default Navbar;
