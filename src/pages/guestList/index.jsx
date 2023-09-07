import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import Navbar from '../../components/navbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import deco6 from '../../assets/deco/deco3.png';
import Typography from '@mui/material/Typography';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import {
  Table,
  TableRow,
  TableCell,
  TableHeading,
  StyledGestlist,
} from './styles';

const GuestList = () => {
  const [list, setList] = useState([]);

  const firebaseConfig = {
    apiKey: 'AIzaSyAIOSm6WVbjhDDMJcUCpnIcSaZ7zQ3jB3U',
    authDomain: 'micaymauri-c6774.firebaseapp.com',
    projectId: 'micaymauri-c6774',
    storageBucket: 'micaymauri-c6774.appspot.com',
    messagingSenderId: '672472758358',
    appId: '1:672472758358:web:a7b4140dd3cf23b50aa3f7',
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    const listado = collection(db, 'invitado');
    getDocs(listado).then((snapshot) => {
      setList([...snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))]);
    });
  }, []);
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
          Lista de invitados
        </Typography>
        <StyledGestlist>
          <div className="decoImg">
            <img src={deco6} alt="photo" />
          </div>
          <Box
            marginTop={5}
            marginBottom={5}
            sx={{
              bgcolor: '#f4f0ef',
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            <Box>
              <Table>
                <TableRow>
                  <TableHeading>Apellido</TableHeading>
                  <TableHeading>Nombre</TableHeading>
                  <TableHeading>Restriccion alimentaria</TableHeading>
                </TableRow>
                {list.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.Apellido}</TableCell>
                    <TableCell>{item.Nombre}</TableCell>
                    <TableCell>{item.restriccion}</TableCell>
                  </TableRow>
                ))}
              </Table>
            </Box>
          </Box>
        </StyledGestlist>
      </Box>
    </Container>
  );
};

export default GuestList;
