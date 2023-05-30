import Navbar from '../../components/navbar';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../../public/assets/3.jpg';

const Photos = () => {
  return (
    <div>
      <h1>Fotos</h1>
      <Navbar />
      <p>Acá podes subir y compartir las fotos que saques:</p>
      <div>
        <Image src={img} width={500} height={500} alt="foto" />
      </div>
      <Link href="https://drive.google.com/drive/folders/1nF4YOFjxZ6ucRHCs8Sj_nal2wEhfhbv4?usp=sharing">
        Carpeta drive
      </Link>
    </div>
  );
};

export default Photos;
