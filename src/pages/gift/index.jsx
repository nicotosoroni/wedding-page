import Navbar from '../../components/navbar';
import { StyledGift } from './styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import deco4 from '../../assets/deco/deco4.png';
import deco6 from '../../assets/deco/deco6.png';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RedeemIcon from '@mui/icons-material/Redeem';

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
        <Typography
          variant="h5"
          component="h2"
          paddingTop={1}
          paddingLeft={3}
          sx={{
            fontFamily: ' Comfortaa, cursive',
          }}
        >
          Depositar los regalos aquí
        </Typography>
        <StyledGift>
          <div className="decoImg">
            <img src={deco4} alt="photo" />
          </div>
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
                  marginBottom={2}
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Banco: Nombre del banco
                </Typography>
                <hr />
                <Typography variant="body2" marginTop={2} marginBottom={2}>
                  CBU: 0000000000000000000000000
                  <br />
                  Alias: alias.alias.alias
                </Typography>
                <hr />
                <Typography variant="h5" component="div">
                  {bull}¡Muchas gracias!{bull}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <div className="decoImg">
            <img src={deco6} alt="photo" />
          </div>
        </StyledGift>
      </Box>
    </Container>
  );
};

export default Schedule;
