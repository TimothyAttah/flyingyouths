import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';
import { Hero } from './modules/hero/Hero';
import { Welcome } from './modules/welcome/Welcome';

const Home = () => {
  const home = gsap.timeline();

  return (
    <div>
      <Transition timeline={home} />
      <Hero />
     <Welcome />
    </div>
  );
};

export default Home;
