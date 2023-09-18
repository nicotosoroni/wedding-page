import Navbar from '../../components/navbar';
import { StyledSchedule } from './styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import deco4 from '../../assets/deco/deco4.png';
import deco6 from '../../assets/deco/deco3.png';
import fondo4 from '../../assets/deco/fondo4.png';
import Typography from '@mui/material/Typography';
import MusicPlayer from '../../components/MusicContext/MusicPlayer';
// import Typography from '@mui/material/Typography';

const Schedule = () => {
  return (
    <Container maxWidth={'lg'} disableGutters>
      <Box sx={{ bgcolor: '#f4f0ef' }}>
        <Navbar />
        <MusicPlayer />
        {/* <Typography
          variant="h5"
          component="h2"
          paddingTop={1}
          paddingLeft={3}
          sx={{
            fontFamily: ' Comfortaa, cursive',
          }}
        >
          Cronograma
        </Typography> */}
        <StyledSchedule>
          <Box className="decoImg" marginTop={20} marginBottom={5}>
            <img src={deco4} alt="photo" />
          </Box>
          <Box
            sx={{
              bgcolor: '#f4f0ef',
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            <Typography
              width={'75%'}
              variant="h4"
              component="h2"
              margin={2}
              sx={{
                fontFamily: ' Comfortaa, cursive',
              }}
            >
              Próximamente
            </Typography>
          </Box>
          <Box className="decoImg" marginTop={4} marginBottom={5}>
            <img src={deco6} alt="photo" />
          </Box>
          {/* <div className="hour">
            <ul>
              <li>
                <p>5:00 - 5:45 PM - </p>
              </li>
              <li>
                <p>6:00 - 7:00 PM - </p>
              </li>
              <li>
                <p>7:00 - 7:15 PM - </p>
              </li>
              <li>
                <p>7:20 - 7:25 PM - </p>
              </li>
              <li>
                <p>7:25 - 7:35 PM - </p>
              </li>
              <li>
                <p>7:30 PM - </p>
              </li>
              <li>
                <p>7:50 - 8:15 PM - </p>
              </li>
              <li>
                <p>8:15 - 9:00 PM - </p>
              </li>
              <li>
                <p>9:00 - 9:45 PM - </p>
              </li>
              <li>
                <p>9:50 - 10:00 PM - </p>
              </li>
              <li>
                <p>10:00 - 11:00 PM - </p>
              </li>
            </ul>
          </div>
          <div className="activity">
            <ul>
              <li>
                <p>Bienvenida</p>
              </li>
              <li>
                <p>Barra de tragos</p>
              </li>
              <li>
                <p>Ubicación en las mesas</p>
              </li>
              <li>
                <p>Inicio de celebración nupcial</p>
              </li>
              <li>
                <p>Primer baile</p>
              </li>
              <li>
                <p>Brindis de bienvenida</p>
              </li>
              <li>
                <p>Se sirve la entrada</p>
              </li>
              <li>
                <p>Primer plato y brindis</p>
              </li>
              <li>
                <p>Baile de padre y novia</p>
              </li>
              <li>
                <p>Torta y agradecimiento</p>
              </li>
              <li>
                <p>¡Baile!</p>
              </li>
            </ul>
          </div> */}
          <Box
            className="fondoImg"
            marginTop={2}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <img src={fondo4} alt="photo" />
          </Box>
        </StyledSchedule>
      </Box>
    </Container>
  );
};

export default Schedule;
