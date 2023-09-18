import Navbar from '../../components/navbar';
import { useLoadScript } from '@react-google-maps/api';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import deco4 from '../../assets/deco/deco4.png';
import deco6 from '../../assets/deco/deco6.png';
import { Link } from 'react-router-dom';
import { StyledMap } from './styles';
import MusicPlayer from '../../components/MusicContext/MusicPlayer';

const TourPage = () => {
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
                <Link
                  to="https://www.turismoenpotrerodelosfunes.com/"
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
                Dique La Florida – Camping Universidad Nacional.
                <Link
                  to="https://visitarsanluis.com/blog/post/dique-la-florida"
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
                Rio El Trapiche.
                <Link
                  to="https://eltrapichesanluis.com.ar/eltrapiche/"
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
                Replica del Cabildo - Pirámide de Mayo - Casita de Tucuman y
                Recova.
                <Link
                  to="https://www.facebook.com/cabildoensanluis"
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
                Mirador “Hito del Bicentenario” – Terrazas del Portezuelo - San
                Luis.
                <Link
                  to="https://culturasanluis.com/mirador-hito-del-bicentenario/"
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
                Hospital “Ramon Carrillo” – San Luis.
                <Link
                  to="https://hospitalramoncarrillo.sanluis.gov.ar/"
                  target="_blank"
                >
                  Link a la web
                </Link>
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
                <Link
                  to="https://visitarsanluis.com/blog/post/cerro-sololosta-una-visita-al-pasado"
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
                Trekking al `Cerro de la Cruz`.
                <Link
                  to="https://visitarsanluis.com/blog/post/cerro-de-la-cruz-inicia-en-el-trekking-en-este-cerro"
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
                Valle de Pancanta.
                <Link
                  to="https://visitarsanluis.com/blog/post/valle-del-pancanta"
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
                Parque de tirolesas “ArVolar” – Juana Koslay.
                <Link to="https://www.parquearvolar.com.ar/" target="_blank">
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
                Puente Colgante – La Florida.
                <Link
                  to="https://es.wikiloc.com/rutas-senderismo/puente-peatonal-colgante-la-florida-balde-de-la-isla-la-florida-san-luis-club-andino-san-luis-51881426"
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
                Salinas del Bebedero - Balde.
                <Link
                  to="https://viapais.com.ar/san-luis/el-desierto-blanco-de-san-luis-que-muy-pocos-conocen-y-que-te-va-a-enamorar/"
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
                Monumento al Pueblo Puntano – Juana Koslay.
                <Link
                  to="https://culturasanluis.com/monumento-al-pueblo-puntano/"
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
                Iglesia Catedral San Luis – Plaza Pringles
                <Link
                  to="https://sanluislaciudad.gob.ar/turismo-cultura-deportes/casco-viejo/catedral-san-luis/"
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
                Monasterio de las Monjas Benedictinas.
                <Link
                  to="https://visitarsanluis.com/blog/post/monasterio-nuestra-senora-de-la-fidelidad-san-luis"
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
                Villa de la Quebrada.
                <Link
                  to="https://visitarsanluis.com/localidad/villa-de-la-quebrada"
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
                Parque Astronómico – La Punta.
                <Link to="http://palp.edu.ar/" target="_blank">
                  Link a la web
                </Link>
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
                <Link
                  to="https://www.tripadvisor.com.ar/Restaurant_Review-g2052513-d3136639-Reviews-Parrilla_Las_Golondrinas-Potrero_de_los_Funes_Province_of_San_Luis_Cuyo.html"
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
                Casa de Té “Lunamakena“- Potrero de los Funes.{' '}
                <Link
                  to="https://www.instagram.com/lunamakena_resto/?hl=es-la"
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
                Tearoom- Bar Flotante - Potrero de los Funes.{' '}
                <Link
                  to="https://www.tripadvisor.com.ar/Restaurant_Review-g312788-d1983488-Reviews-Floating_Tearoom_at_Hotel_Potrero_de_los_Funes-San_Luis_Province_of_San_Luis_Cuyo.html"
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
                Estancia “EL AMPARO” - Estancia Grande. Reserva previa.{' '}
                <Link to="http://www.elamparo1850.com/" target="_blank">
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
                Casa de Té “Casa Suiza”- Estancia Grande.{' '}
                <Link
                  to="https://www.instagram.com/casa.suiza/"
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
                La Pulpería del Negro - Estancia Grande{' '}
                <Link
                  to="https://www.instagram.com/pulperiadelnegroestanciagrande/?hl=es"
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
                El “Bodegón de Oro” - La Carolina. Reserva previa.{' '}
                <Link
                  to="https://www.instagram.com/elbodegondeoro/?hl=es"
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
                Restaurant “Los Robles” - San Luis.{' '}
                <Link to="https://www.losroblesresto.com.ar/" target="_blank">
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
                “Estación B Café” - desayunos y meriendas - San Luis.{' '}
                <Link
                  to="https://www.instagram.com/estacionbcafe/?hl=es"
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
                ll Nonno - pastas- San Luis.{' '}
                <Link
                  to="https://www.facebook.com/IINonnoPastas/?locale=es_LA"
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
                La Tavola - San Luis.{' '}
                <Link
                  to="https://www.instagram.com/latavola_sl/?hl=es-la"
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
                Cactus - taquería- San Luis.{' '}
                <Link
                  to="https://www.instagram.com/cactus_restobar_sanluis?fbclid=IwAR1i79cvaqQnfXQhu04Jjj-Nr6HBKdjrFr_DgspcdmNFiTv7GdgGYt0NvGE"
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
                Un tal René - cervecería - San Luis{' '}
                <Link
                  to="https://www.instagram.com/untalrenesanluisciudad/"
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
                Bonjour - Meriendas y desayunos - San Luis{' '}
                <Link
                  to="https://www.instagram.com/bonjourcafebistro_/?hl=es-la"
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
                ”El Nativo” - La Florida.{' '}
                <Link
                  to="https://www.instagram.com/nativosanluis/?hl=es"
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
        </StyledMap>
      </Box>
    </Container>
  );
};

export default TourPage;
