import Navbar from '../../components/navbar';
import Image from 'next/image';
import img from '../../../public/assets/b.png';

const FAQ = () => {
  return (
    <div>
      <h1>FAQs</h1>
      <Navbar />
      <div>
        <Image src={img} width={500} height={500} alt="foto" />
      </div>
    </div>
  );
};

export default FAQ;
