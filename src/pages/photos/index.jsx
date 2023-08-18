import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import img from '../../assets/3.jpg';

const Photos = () => {
  return (
    <div>
      <h1>Fotos</h1>
      <Navbar />
      <p>Acá podes subir y compartir las fotos que saques:</p>
      <div>
        <img src={img} width={500} height={500} alt="foto" />
      </div>
      <Link href="https://drive.google.com/drive/folders/1nF4YOFjxZ6ucRHCs8Sj_nal2wEhfhbv4?usp=sharing">
        Carpeta drive
      </Link>
    </div>
  );
};

export default Photos;
