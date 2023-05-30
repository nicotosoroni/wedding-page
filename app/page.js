/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import img from '../public/assets/1.jpg';
import Header from './components/header';
import Navbar from './components/navbar';
import Body from './components/body';

export default function Home() {
  console.log('image');
  return (
    <main>
      <Header />
      <Navbar />
      <div>
        <Image src={img} width={500} height={500} alt="foto" />
      </div>
      <Body />
    </main>
  );
}
