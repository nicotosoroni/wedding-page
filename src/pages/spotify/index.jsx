import Navbar from '../../components/navbar';
// import img from '../../assets/3.jpg';
import { Link } from 'react-router-dom';
// import img from '../../assets/3.jpg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StyledMusic } from './styles';
import deco4 from '../../assets/deco/deco4.png';
import deco6 from '../../assets/deco/deco6.png';
// import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const Spotify = () => {
  return (
    <Container maxWidth={'lg'} disableGutters>
      <Box sx={{ bgcolor: '#f4f0ef' }}>
        <Navbar />
        <StyledMusic>
          <Typography
            variant="h5"
            component="h2"
            paddingTop={1}
            paddingLeft={3}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Cargá tu música favorita
          </Typography>
          <div className="decoImg">
            <img src={deco4} alt="photo" />
          </div>
          <Typography
            variant="h6"
            component="h2"
            margin={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Ingresando a través del siguient enlace vas a poder acceder a la
            lista de reproducción del casamiento para que suenen todos tus temas
            preferidos!
          </Typography>

          {/* <div>
            <img src={img} width={500} height={500} alt="foto" />
          </div> */}
          <Link
            to="https://open.spotify.com/playlist/6DvzTvDYNbRcNsDbQRf42P?si=8513a3658e4f4aeb&pt=a2cb8c7c485722030fbfe36b3ef44db6"
            target="_blank"
          >
            <Box
              padding={10}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <rect
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="none"
                />
                <path
                  fill="currentColor"
                  d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                />
              </svg>
            </Box>
          </Link>
          <div className="decoImg">
            <img src={deco6} alt="photo" />
          </div>
        </StyledMusic>
      </Box>
    </Container>
  );
};

export default Spotify;
