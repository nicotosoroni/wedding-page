import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import img from '../../assets/3.jpg';

const Spotify = () => {
  return (
    <div>
      <h1>Cargá tu música favorita</h1>
      <Navbar />
      <p>
        Ingresando a través del siguient enlace vas a poder acceder a la lista
        de reproducción del casamiento para que suenen todos tus temas
        preferidos!
      </p>
      <div>
        <img src={img} width={300} height={300} alt="foto" />
      </div>
      <Link href="https://open.spotify.com/playlist/6DvzTvDYNbRcNsDbQRf42P?si=8513a3658e4f4aeb&pt=a2cb8c7c485722030fbfe36b3ef44db6">
        Ingresa a la lista de casamiento
      </Link>
    </div>
  );
};

export default Spotify;
