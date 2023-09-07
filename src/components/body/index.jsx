import CountDown from '../countdown';
import deco1 from '../../assets/deco/deco1.png';
import deco2 from '../../assets/deco/deco2.png';
import deco3 from '../../assets/deco/deco3.png';
import deco4 from '../../assets/deco/deco4.png';
import deco5 from '../../assets/deco/deco5.png';
import deco6 from '../../assets/deco/deco6.png';
import { StyledBody } from './styles';
import Navbar from '../navbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';

const Body = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <StyledBody>
        <Navbar />
        <div className="titleImg">
          <img className="decoImg" src={deco1} alt="photo" />
        </div>
        <Box className="bodyTitle">
          <span>Micaela y Mauricio</span>
        </Box>
        <div className="titleImg">
          <img className="decoImg" src={deco2} alt="photo" />
        </div>
        <hr />
        <Box
          sx={{
            width: '80%',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            marginTop={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            ¡Nos casamos! y estaríamos muy felices si nos pudieran acompañar en
            este dia tan especial para nosotros”.
          </Typography>
        </Box>
        <hr />
        <Box
          sx={{
            width: '80%',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Viernes - 18:30 hs.
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            marginTop={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            08 | 12 | 2023
          </Typography>
        </Box>
        <hr />
        <div>
          <img className="decoImg" src={deco3} alt="photo" />
        </div>
        <Box
          sx={{
            width: '80%',
            textAlign: 'center',
          }}
          margin={2}
        >
          <Typography
            variant="h4"
            component="h2"
            marginTop={4}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Salón Tattersal - Epic Hotel San Luis - La Punta.
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            marginTop={5}
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontSize: '32px',
            }}
          >
            ¡ Los esperamos !
          </Typography>
        </Box>
        <div>
          <img className="decoImg" src={deco4} alt="photo" />
        </div>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          margin={5}
        >
          <InstagramIcon />
          <Typography
            variant="h4"
            component="h2"
            paddingLeft={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            #micaymauri
          </Typography>
        </Box>
        <div>
          <img className="decoImg" src={deco5} alt="photo" />
        </div>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          marginTop={5}
        >
          <Typography
            variant="h4"
            component="h2"
            paddingLeft={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Vestimenta: Elegante Sport.
          </Typography>
        </Box>
        <hr />
        <CountDown />
        <hr />
        <div>
          <img className="decoImg" src={deco6} alt="photo" />
        </div>
      </StyledBody>
    </Container>
  );
};
export default Body;
