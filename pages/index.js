import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import {GradientCircleRight, GradientCircleLeft } from '../components/GradientCircle';
import Intro from '../components/Intro';


export default function Home() {
  const [mode, setMode] = useState(true);

  return (
    <div className={`page ${!mode && "light"} dark`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Banner />
        <Navbar mode={mode} setMode={setMode} />
      <main className='main'>
        <GradientCircleRight/>
        <GradientCircleLeft/>
        <Intro />
      </main>
    </div>
  );
}
