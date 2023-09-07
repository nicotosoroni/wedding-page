import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import Navbar from '../../components/navbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import deco3 from '../../assets/deco/deco3.png';
import deco4 from '../../assets/deco/deco4.png';
// import { doc, collection, getDoc, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import {
  FormularioContainer,
  Form,
  Label,
  Input,
  Button,
  Select,
  StyledRegister,
} from './styles';

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

const Register = () => {
  // const items = ['Item 1', 'Item 2', 'Item 3'];
  const [list, setList] = useState([]);
  const [showDiv, setShowDiv] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [password, setPassword] = useState('');
  const [restriccionAlimentaria, setRestriccionAlimentaria] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const ref = doc(db, 'invitado', 'Ih5qzWIivSMQX1mQfhoG');
    // getDoc(ref).then((snapshot) => {
    //   if (snapshot.exists()) {
    //     console.log({ id: snapshot.id, ...snapshot.data() });
    //   }
    // });
    console.log('pase1');
    const listado = collection(db, 'invitado');
    getDocs(listado).then((snapshot) => {
      setList([...snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))]);
      console.log(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      console.log('pase2', list);
    });
  }, [formularioEnviado]);

  // const handleClick = () => {
  //   const ordersCollection = collection(db, 'invitado');
  //   addDoc(ordersCollection, {
  //     Apellido: 'Tosoroni',
  //     Nombre: 'Augusto',
  //   }).then(({ id }) => console.log('creado'));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = {
      nombre,
      apellido,
      restriccionAlimentaria,
    };
    const ordersCollection = collection(db, 'invitado');
    addDoc(ordersCollection, {
      Apellido: apellido,
      Nombre: nombre,
      restriccion: restriccionAlimentaria,
    }).then(() => console.log('creado'));
    console.log(usuario); // Aquí puedes hacer lo que quieras con el objeto usuario

    setFormularioEnviado(true);
    setShowButton(true);
  };

  const viewCredentials = () => {
    setShowDiv(!showDiv);
  };
  const viewList = (pass) => {
    if (pass === 'mica') {
      navigate('/pages/list');
    }
  };

  return (
    <Container maxWidth={'lg'} disableGutters>
      <Box sx={{ bgcolor: '#f4f0ef' }}>
        <Navbar />
        <StyledRegister>
          <Typography
            variant="h5"
            component="h2"
            paddingTop={1}
            paddingLeft={3}
            sx={{
              fontFamily: ' Comfortaa, cursive',
            }}
          >
            Registrate como invitado
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
            }}
          >
            A través de este formulario podés registrar los participantes al
            casamiento:
          </Typography>
          <FormularioContainer>
            {/* <h2>Formulario de Usuario</h2> */}
            {formularioEnviado ? (
              <p>¡Formulario enviado correctamente!</p>
            ) : (
              <Form onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="nombre">Nombre:</Label>
                  <Input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="apellido">Apellido:</Label>
                  <Input
                    type="text"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="dropdown">Restricción Alimentaria:</Label>
                  <Select
                    id="dropdown"
                    value={restriccionAlimentaria}
                    onChange={(e) => setRestriccionAlimentaria(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="celiaco">Celiaco</option>
                    <option value="diabetico">Diabetico</option>
                    <option value="vegano">Vegano</option>
                    <option value="vegetariano">Vegetariano</option>
                    <option value="intolerancia">
                      Intolerancia a la lactosa
                    </option>
                  </Select>
                </div>
                {/* <div>
              <Label htmlFor="restriccionAlimentaria">Restricción Alimentaria:</Label>
              <Input
                type="text"
                id="restriccionAlimentaria"
                value={restriccionAlimentaria}
                onChange={e => setRestriccionAlimentaria(e.target.value)}
              />
            </div> */}
                <Button type="submit">Enviar</Button>
              </Form>
            )}
          </FormularioContainer>
          {/* <button onClick={handleClick}>crear</button> */}
          {showButton && (
            <Box
              marginBottom={3}
              marginTop={3}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Button
                onClick={() => {
                  setFormularioEnviado(false);
                  setNombre('');
                  setApellido('');
                  setRestriccionAlimentaria('');
                }}
              >
                Cargar nuevo invitado
              </Button>
            </Box>
          )}

          <Box>
            <Button type="submit" onClick={viewCredentials}>
              Mirar listado de invitados
            </Button>
          </Box>
          {showDiv && (
            <div>
              <Form onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="apellido">Password:</Label>
                  <Input
                    type="text"
                    id="apellido"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <Button type="button" onClick={() => viewList(password)}>
                  Ver listado
                </Button>
              </Form>
            </div>
          )}
          <Box className="decoImg" marginTop={2} marginBottom={2}>
            <img src={deco3} alt="photo" />
          </Box>
        </StyledRegister>
      </Box>
    </Container>
  );
};

export default Register;
