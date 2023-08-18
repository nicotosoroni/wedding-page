import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import Navbar from '../../components/navbar';
// import { doc, collection, getDoc, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import { collection, getDocs, getFirestore, addDoc } from 'firebase/firestore';
import {
  FormularioContainer,
  Form,
  Label,
  Input,
  Button,
  Table,
  TableRow,
  TableCell,
  TableHeading,
  Select,
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
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [restriccionAlimentaria, setRestriccionAlimentaria] = useState('');
  const [formularioEnviado, setFormularioEnviado] = useState(false);

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
  };

  const show = () => {
    console.log(list);
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <h1>Registrate como invitado</h1>
      <Navbar />

      <p>
        A través de este formulario podés registrar los participantes al
        casamiento:
      </p>
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
                <option value="celiaco">celiaco</option>
                <option value="diabetico">diabetico</option>
                <option value="vegano">vegano</option>
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
      <div>
        <button
          onClick={() => {
            setFormularioEnviado(false);
            setNombre('');
            setApellido('');
            setRestriccionAlimentaria('');
          }}
        >
          Cargar nuevo invitado
        </button>
      </div>
      <div>
        <button onClick={show}>Mostrar</button>
      </div>

      {showDiv && (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default Register;
