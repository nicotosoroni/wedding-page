import Navbar from '../../components/navbar';
import Map from '../../components/map';
import { useLoadScript } from '@react-google-maps/api';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import deco4 from '../../assets/deco/deco4.png';
import deco6 from '../../assets/deco/deco6.png';
import fondo5 from '../../assets/deco/fondo5.png';
import fondo6 from '../../assets/deco/fondo6.png';
import { StyledMap } from './styles';
import MusicPlayer from '../../components/MusicContext/MusicPlayer';

const MapPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAarenjFZ9pH61_5_0Px_PtaPnINiAGdQI',
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Container maxWidth={'lg'} disableGutters>
      <Box sx={{ bgcolor: '#f4f0ef' }}>
        <Navbar />
        <MusicPlayer />
        <StyledMap>
          <Box
            className="esquinaSup"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <img src={fondo5} alt="photo" />
          </Box>
          {/* <Typography
            variant="h5"
            component="h2"
            paddingTop={1}
            paddingLeft={3}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Mapa
          </Typography> */}
          <Box className="decoImg" marginTop={2} marginBottom={2}>
            <img src={deco4} alt="photo" />
          </Box>
          <Typography
            variant="h6"
            component="h2"
            margin={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Acá podes ver la ubicación del salón:
          </Typography>
          <Box
            marginBottom={5}
            marginTop={5}
            sx={{
              display: { xs: 'block', md: 'none' },
              overflow: 'hidden',
            }}
          >
            <Map />
          </Box>
          <Box
            className="mapa"
            marginBottom={5}
            marginTop={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Map />
          </Box>
          <div className="decoImg">
            <img src={deco6} alt="photo" />
          </div>
          <Box
            className="esquinaInf"
            marginTop={2}
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            <img src={fondo6} alt="photo" />
          </Box>
        </StyledMap>
      </Box>
    </Container>
  );
};

export default MapPage;
