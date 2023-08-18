import Navbar from '../../components/navbar';
import img1 from '../../assets/b.png';
import img2 from '../../assets/e.png';
import img3 from '../../assets/f.png';
import img4 from '../../assets/g.png';
import leaf from '../../assets/leaf.webp';
import { FAQStyles } from './styles';

const FAQ = () => {
  return (
    <FAQStyles>
      <h1>FAQs</h1>
      <Navbar />
      <div>
        <img src={img1} width={500} height={500} alt="foto" />
        <img src={img3} width={500} height={500} alt="foto" />
        <img src={img4} width={500} height={500} alt="foto" />
        <img src={img2} width={500} height={800} alt="foto" />
        <div className="leaf">
          <img
            src={leaf}
            width={200}
            height={150}
            alt="foto"
            className="rotate90"
          />
        </div>
      </div>
    </FAQStyles>
  );
};

export default FAQ;
