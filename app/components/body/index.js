import Link from 'next/link';
import CountDown from '../countdown';

const Body = () => {
  return (
    <>
      <h1>Micaela Alvarez</h1>
      <span>y</span>
      <h1>Mauricio Meirovich</h1>
      <h3>#micaymauri</h3>
      <h2>8 de Diciembre, 2023</h2>
      <h4>San Luis, Argentina</h4>
      <CountDown />
      <button>Reservar</button>
      <Link href="/pages/faq">FAQs</Link>
    </>
  );
};
export default Body;
