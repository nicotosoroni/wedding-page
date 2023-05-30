'use client';
import { initializeApp } from 'firebase/app';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import img from '../../../public/assets/2.jpg';
import { useEffect, useState } from 'react';
import {
  doc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
  addDoc,
} from 'firebase/firestore';

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
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const [list, setList] = useState([
    { id: 'Ih5qzWIivSMQX1mQfhoG', Apellido: 'Alvarez', Nombre: 'Micaela' },
    { id: 'U399AObOCxJuc88gRyPy', Nombre: 'Mauri', Apellido: 'Alvarez' },
  ]);
  const [showDiv, setShowDiv] = useState(false);

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
  }, []);

  const handleClick = () => {
    const ordersCollection = collection(db, 'invitado');
    addDoc(ordersCollection, { Apellido: 'Tosoroni', Nombre: 'Nicolas' }).then(
      ({ id }) => console.log('creado')
    );
  };

  const show = () => {
    console.log(list);
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <h1>Registrate como invitado</h1>
      <Navbar />
      <div>
        <Image src={img} width={500} height={500} alt="foto" />
      </div>
      <p>
        A través de este formulario podés registrar los participantes al
        casamiento:
      </p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={handleClick}>crear</button>
      <div>
        <button onClick={show}>Mostrar</button>
      </div>

      {showDiv && (
        <div>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item.Nombre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Register;
