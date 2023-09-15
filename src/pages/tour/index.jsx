import Navbar from '../../components/navbar';
import { useLoadScript } from '@react-google-maps/api';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import deco4 from '../../assets/deco/deco4.png';
import deco6 from '../../assets/deco/deco6.png';
import { Link } from 'react-router-dom';
import { StyledMap } from './styles';

const TourPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAarenjFZ9pH61_5_0Px_PtaPnINiAGdQI',
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Container maxWidth={'lg'} disableGutters>
      <Box sx={{ bgcolor: '#f4f0ef' }}>
        <Navbar />
        <StyledMap>
          <Typography
            variant="h5"
            component="h2"
            paddingTop={1}
            paddingLeft={3}
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontWeight: '700',
            }}
          >
            ¿Qué visitar en San Luis?
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
              fontWeight: '700',
            }}
          >
            LOS IMPERDIBLES !!!
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
                Pueblo de “La Carolina” – Minas de Oro - Gruta de “Inti Huasi”.{' '}
                <Link to="https://lacarolinasanluis.com.ar/" target="_blank">
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
                Parque Nacional Sierra de las Quijadas.{' '}
                <Link
                  to="https://www.argentina.gob.ar/parquesnacionales/sierradelasquijadas"
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
                Estancia Grande{' '}
                <Link
                  to="https://www.instagram.com/estanciagrandesl/?hl=es"
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
                Dique Potrero de los Funes - Hotel Potrero de Funes - Bar
                Flotante (Tearoom).
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
                Dique La Florida – Camping Universidad Nacional.
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
                Rio El Trapiche.
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
                Replica del Cabildo - Pirámide de Mayo - Casita de Tucuman y
                Recova.
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
                Mirador “Hito del Bicentenario” – Terrazas del Portezuelo - San
                Luis.
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
                Hospital “Ramon Carrillo” – San Luis.
              </Typography>
            </li>
          </ul>
          {/* ----------------------------------------------- */}
          <div className="decoImg">
            <img src={deco6} alt="photo" />
          </div>
          <Typography
            variant="h6"
            component="h2"
            margin={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontWeight: '700',
            }}
          >
            LUGARES PARA CONOCER
          </Typography>
          <ul>
            <li>
              <ul>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  margin={2}
                  sx={{
                    fontFamily: ' Comfortaa, cursive',
                  }}
                >
                  Para hacer en auto:
                </Typography>

                <li>
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    margin={2}
                    sx={{
                      fontFamily: ' Comfortaa, cursive',
                    }}
                  >
                    Camino Paisajístico “La Carolina – San Francisco del Monte
                    de Oro” pasando por Las Chacras.
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
                    Camino Paisajístico “Potrero de los Funes – Estancia
                    Grande”.
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
                    Camino Paisajístico “Ciudad de La Punta – Potrero de los
                    Funes” pasando por el mirador.
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
                    Camino Paisajístico “Dique La Florida – Dique Antonio
                    Esteban Agüero – Nogolí.
                  </Typography>
                </li>
              </ul>
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
                Trekking al “Cerro Sololosta”.
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
                Trekking al `Cerro de la Cruz`.
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
                Valle de Pancanta.
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
                Parque de tirolesas “ArVolar” – Juana Koslay.
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
                Puente Colgante – La Florida.
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
                Salinas del Bebedero - Balde.
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
                Monumento al Pueblo Puntano – Juana Koslay.
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
                Iglesia Catedral San Luis – Plaza Pringles
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
                Monasterio de las Monjas Benedictinas.
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
                Villa de la Quebrada.
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
                Parque Astronómico – La Punta.
              </Typography>
            </li>
          </ul>
          {/* ----------------------------------------------- */}
          <div className="decoImg">
            <img src={deco6} alt="photo" />
          </div>
          <Typography
            variant="h6"
            component="h2"
            margin={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontWeight: '700',
            }}
          >
            ¿Dónde comer? :
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
                Parrilla “Las Golondrinas” – Potrero de los Funes.{' '}
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
                Casa de Té “Lunamakena“- Potrero de los Funes.{' '}
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
                Cervecería “El Malón” - Potrero de los Funes.{' '}
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
                Tearoom- Bar Flotante - Potrero de los Funes.{' '}
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
                Estancia “EL AMPARO” - Estancia Grande. Reserva previa.{' '}
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
                Casa de Té “Casa Suiza”- Estancia Grande.{' '}
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
                La Pulpería del Negro - Estancia Grande{' '}
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
                El “Bodegón de Oro” - La Carolina. Reserva previa.{' '}
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
                Restaurant “Los Robles” - San Luis.{' '}
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
                “Estación B Café” - desayunos y meriendas - San Luis.{' '}
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
                ll Nonno - pastas- San Luis.{' '}
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
                La Tavola - San Luis.{' '}
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
                Cactus - taquería- San Luis.{' '}
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
                Un tal René - cervecería - San Luis{' '}
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
                Bonjour - Meriendas y desayunos - San Luis{' '}
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
                Bonjour Café Bistro Centro - desayunos y meriendas - San Luis.{' '}
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
                “El Nativo” - La Florida.{' '}
              </Typography>
            </li>
          </ul>
          <Box className="decoImg" marginTop={2} marginBottom={2}>
            <img src={deco6} alt="photo" />
          </Box>
        </StyledMap>
      </Box>
    </Container>
  );
};

export default TourPage;
