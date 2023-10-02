import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
import deco4 from '../../assets/deco/deco4.png';
import deco6 from '../../assets/deco/deco6.png';
import { FAQStyles } from './styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MusicPlayer from '../../components/MusicContext/MusicPlayer';

const Faq = () => {
  return (
    <Container maxWidth={'lg'} disableGutters>
      <Box sx={{ bgcolor: '#f4f0ef' }}>
        <Navbar isTop />
        <MusicPlayer />
        <FAQStyles>
          <Typography
            variant="h5"
            component="h2"
            paddingTop={1}
            paddingLeft={3}
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontWeight: '900',
            }}
          >
            Preguntas frecuentes
          </Typography>
          <Box className="decoImg" marginTop={2} marginBottom={2}>
            <img src={deco4} alt="photo" />
          </Box>
          <Typography
            variant="h6"
            component="h2"
            margin={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontWeight: '900',
            }}
          >
            ¿Números de Remises/taxis?
          </Typography>
          <ul>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Remises America: 0266-4681170 (San Luis).
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Norte Remis: 0266-4245230 (San Luis).
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Cosmos Remises: 0266-4440000 (San Luis).
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                EcoTaxi: 0266-4154389 (La Punta).
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Teletaxi: 0266-4731111 (La Punta).
              </Typography>
            </li>
          </ul>
          {/* ----------------------------------------------- */}
          <Box className="decoImg" marginTop={2} marginBottom={2}>
            <img src={deco6} alt="photo" />
          </Box>
          <hr />
          <Typography
            variant="h6"
            component="h2"
            margin={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontWeight: '900',
            }}
          >
            ¿Dónde se pueden alquilar autos?
          </Typography>
          <ul>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Alquiler de autos S&S: 0266-5057696 (San Luis).
              </Typography>
            </li>
          </ul>
          {/* ----------------------------------------------- */}
          <hr />
          <Box className="decoImg" marginTop={2} marginBottom={2}>
            <img src={deco4} alt="photo" />
          </Box>
          <Typography
            variant="h6"
            component="h2"
            margin={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontWeight: '900',
            }}
          >
            ¿Dónde alojarse? :
          </Typography>
          <ul>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Epic Hotel San Luis - La Punta.{' '}
                <Link to="https://epichotelsanluis.com/" target="_blank">
                  Link a la web
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                La Recova Hotel Spa - La Punta.{' '}
                <Link to="http://larecovahotel.com.ar/" target="_blank">
                  Link a la web
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Balcones del Sol (Av. serrana y calle 5 norte) - La Punta.{' '}
                <Link to="https://balconesdelsol.com.ar/" target="_blank">
                  Link a la web
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Boreas Apart Hotel (Av. serrana y calle 3 sur) - La Punta.{' '}
                <Link
                  to="http://boreas-apart.hotels-argentina.net/es/"
                  target="_blank"
                >
                  Link a la web
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Be Haus Temporary Apartments (Tomas Jofre 1551) - San Luis.{' '}
                <Link
                  to="https://www.instagram.com/be_haus/?igshid=MmU2YjMzNjRlOQ%3D%3D"
                  target="_blank"
                >
                  Link a la web
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Visit Hotel y Apart (Av. illia 526) - San Luis.{' '}
                <Link to="https://wp.visithotelapart.com.ar/" target="_blank">
                  Link a la web
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Hotel Premium Tower Suites (Av. illia 525) - San Luis.{' '}
                <Link
                  to="https://www.instagram.com/premiumtower.sanluis/?igshid=MmU2YjMzNjRlOQ%3D%3D"
                  target="_blank"
                >
                  Link a la web
                </Link>
              </Typography>
            </li>
            <li>
              <Typography
                variant="subtitle1"
                component="h2"
                margin={2}
                sx={{
                  fontFamily: ' Comfortaa, cursive',
                }}
              >
                Hotel Internacional Potrero de los Funes - Potrero de los Funes.{' '}
                <Link
                  to="http://www.hotelpotrero.sanluis.gov.ar/"
                  target="_blank"
                >
                  Link a la web
                </Link>
              </Typography>
            </li>
          </ul>
          <Box className="decoImg" marginTop={2} marginBottom={2}>
            <img src={deco6} alt="photo" />
          </Box>
        </FAQStyles>
      </Box>
    </Container>
  );
};

export default Faq;
