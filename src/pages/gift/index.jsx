import Navbar from '../../components/navbar';
import { StyledGift, Button } from './styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import deco4 from '../../assets/deco/deco4.png';
import deco6 from '../../assets/deco/deco6.png';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RedeemIcon from '@mui/icons-material/Redeem';
import fondo4 from '../../assets/deco/fondo4.png';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Schedule = () => {
  return (
    <Container maxWidth={'lg'} disableGutters>
      <Box sx={{ bgcolor: '#f4f0ef' }}>
        <Navbar />
        {/* <Typography
          variant="h5"
          component="h2"
          paddingTop={1}
          paddingLeft={3}
          sx={{
            fontFamily: ' Comfortaa, cursive',
          }}
        >
          Depositar los regalos aquí
        </Typography> */}
        <StyledGift>
          <Box className="decoImg" marginTop={4} marginBottom={2}>
            <img src={deco4} alt="photo" />
          </Box>
          <Box
            margin={2}
            sx={{
              bgcolor: '#f4f0ef',
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <RedeemIcon />
                <Typography
                  marginTop={2}
                  marginBottom={2}
                  sx={{ fontSize: 14, textAlign: 'center' }}
                  color="text.secondary"
                  gutterBottom
                >
                  <b>Nro. de cuenta:</b> 4069206-9 144-1
                </Typography>
                <hr />
                <Typography
                  variant="body2"
                  marginTop={2}
                  marginBottom={2}
                  sx={{ textAlign: 'center' }}
                >
                  <b>CBU:</b> 0070144630004069206918
                  <br />
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText('0070144630004069206918');
                    }}
                  >
                    Copiar CBU
                  </Button>
                  {/* Alias: alias.alias.alias */}
                </Typography>
                <hr />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ textAlign: 'center' }}
                >
                  {bull}¡Muchas gracias!{bull}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box className="decoImg" marginTop={2} marginBottom={4}>
            <img src={deco6} alt="photo" />
          </Box>
          <Box
            className="fondoImg"
            marginTop={2}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <img src={fondo4} alt="photo" />
          </Box>
        </StyledGift>
      </Box>
    </Container>
  );
};

export default Schedule;
