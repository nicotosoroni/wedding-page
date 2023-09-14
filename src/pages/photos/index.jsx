import Navbar from '../../components/navbar';
import { Link } from 'react-router-dom';
// import img from '../../assets/3.jpg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StyledPhotos } from './styles';
import deco4 from '../../assets/deco/deco4.png';
import deco5 from '../../assets/deco/deco5.png';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const Photos = () => {
  return (
    <Container maxWidth={'lg'} disableGutters>
      <Box sx={{ bgcolor: '#f4f0ef' }}>
        <Navbar />
        <StyledPhotos>
          {/* <Typography
            variant="h5"
            component="h2"
            paddingTop={1}
            paddingLeft={3}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Fotos
          </Typography> */}
          <div className="decoImg">
            <img src={deco4} alt="photo" />
          </div>
          <Box>
            <Typography
              width={'75%'}
              variant="h6"
              component="h2"
              margin={2}
              sx={{
                fontFamily: ' Comfortaa, cursive',
              }}
            >
              Haz click en el siguiente icono para subir y compartir con todos
              los invitados, las fotos que tomes de la boda. :
            </Typography>
          </Box>
          {/* <div>
            <img src={img} width={500} height={500} alt="foto" />
          </div> */}
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Link
              to="https://drive.google.com/drive/folders/1fPLIGFkw4kq6nUXk0p4M49lI2iJOtuhV"
              target="_blank"
            >
              <Box
                width={'100px'}
                padding={5}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <CameraAltOutlinedIcon />
              </Box>
            </Link>
          </Box>
          <div className="decoImg">
            <img src={deco5} alt="photo" />
          </div>
        </StyledPhotos>
      </Box>
    </Container>
  );
};

export default Photos;
