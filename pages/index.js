import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import {GradientCircleRight, GradientCircleLeft } from '../components/GradientCircle';
import Intro from '../components/Intro';
import Services from "../components/Services"
import Methods from "../components/Methods"
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Contact from '../components/Contact';

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
        <Services />
        <Methods />
        <Pricing/>
        <Team/>
        <Contact/>
      </main>
    </div>
  );
}
