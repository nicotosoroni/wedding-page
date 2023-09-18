import CountDown from '../countdown';
import { Link } from 'react-router-dom';
import deco1 from '../../assets/deco/deco1.png';
import deco2 from '../../assets/deco/deco2.png';
import deco3 from '../../assets/deco/deco3.png';
import deco4 from '../../assets/deco/deco4.png';
import deco5 from '../../assets/deco/deco5.png';
// import deco6 from '../../assets/deco/deco6.png';
// import { useNavigate } from 'react-router-dom';
import { StyledBody } from './styles';
import Navbar from '../navbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
// import useSound from 'use-sound';
// import boopSfx from '../../assets/music.mp3';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import StopIcon from '@mui/icons-material/Stop';
// import Button from '@mui/material/Button';
import MusicPlayer from '../MusicContext/MusicPlayer';

// export const BoopButton = () => {
//   const [play, { stop }] = useSound(boopSfx);
//   const useMountEffect = (fun) => useEffect(fun);

//   useMountEffect(play);

//   return (
//     <Box
//       className="music"
//       sx={{
//         position: 'fixed',
//         top: { xs: '', md: '10px' },
//         right: '10px',
//         backgroundColor: 'rgb(193 188 140)',
//         borderRadius: { xs: '9px', md: '18px' },
//         opacity: '0.6',
//         width: { xs: '36px', md: '128px' },
//         bottom: { xs: '10px', md: 'auto' },
//       }}
//     >
//       <Button onClick={play} color="inherit">
//         <PlayArrowIcon />
//       </Button>
//       <Button onClick={() => stop()} color="inherit">
//         <StopIcon />
//       </Button>
//     </Box>
//   );
// };

const Body = () => {
  // const navigate = useNavigate();
  // const viewGift = () => {
  //   navigate('/pages/gift');
  // };
  return (
    <Container maxWidth={false} disableGutters>
      <StyledBody>
        <Navbar />
        <MusicPlayer />
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
            este día tan especial para nosotros.
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
            variant="h2"
            component="h2"
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontSize: { xs: '2.65rem', md: '3.75rem' },
            }}
          >
            08 | 12 | 2023
          </Typography>
          <Typography
            variant="h4"
            marginTop={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
              fontSize: { xs: '1.625rem', md: '2.125rem' },
            }}
          >
            Viernes - 18:30 hs.
          </Typography>
        </Box>
        <hr />
        <div>
          <img className="decoImg" src={deco4} alt="photo" />
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
          <img className="decoImg" src={deco3} alt="photo" />
        </div>
        <hr />
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          margin={4}
        >
          <InstagramIcon />
          <Link
            to="https://www.instagram.com/explore/tags/mauriymica/"
            target="_blank"
          >
            <Typography
              variant="h4"
              component="h2"
              paddingLeft={2}
              sx={{
                fontFamily: ' Comfortaa, cursive',
              }}
            >
              #mauriymica
            </Typography>
          </Link>
        </Box>
        <div>
          <img className="decoImg" src={deco4} alt="photo" />
        </div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          marginTop={5}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              >
                <path d="M37 21v16m-26 0v7h26v-7m-26 0H4V10l14-6h12l14 6v27h-7m-26 0V21M30 4l-6 14m0 0L18 4m6 14v26m6-40l-6 14m0 0L18 4" />
                <path d="m18 4l-4 8l4 5.5l-2 5.5l8 14m6-33l5 8l-5 5.5l2 5.5l-8 14" />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M218.38 208.12c-.06-.12-.11-.25-.17-.37l-44.54-94.87L193 82.56c.06-.09.12-.18.17-.27a20 20 0 0 0 0-20.58c-.14-.24-.3-.48-.46-.71L172 31.44V12a12 12 0 0 0-24 0v19l-4.38 5.47a20 20 0 0 1-31.24 0L108 31V12a12 12 0 0 0-24 0v19.44L63.31 61c-.16.23-.32.47-.46.71a20 20 0 0 0 0 20.58c0 .09.11.18.17.27l19.31 30.32l-44.54 94.87c-.06.12-.11.25-.17.37A20 20 0 0 0 56 236h144a20 20 0 0 0 18.39-27.88ZM128 68a43.75 43.75 0 0 0 31.21-13l12 17.1l-17.79 27.9h-50.84L84.82 72.12l12-17.1A43.75 43.75 0 0 0 128 68ZM62.31 212l41.31-88h48.76l41.31 88Z"
              />
            </svg>
          </Box>
        </Box>
        <Box
          marginTop={2}
          marginBottom={4}
          className="clothes"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Typography
            variant="h4"
            component="h2"
            paddingLeft={2}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Elegante Sport.
          </Typography>
        </Box>
        <div>
          <img className="decoImg" src={deco5} alt="photo" />
        </div>
        <hr />
        <Box marginBottom={3}>
          <CountDown />
        </Box>

        {/* <hr />
        <div>
          <img className="decoImg" src={deco4} alt="photo" />
        </div>
        <Box
          marginTop={2}
          marginBottom={4}
          className="clothes"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button type="button" onClick={() => viewGift()}>
            Regalo
          </Button>
        </Box>
        <div>
          <img className="decoImg" src={deco6} alt="photo" />
        </div> */}
      </StyledBody>
    </Container>
  );
};
export default Body;
