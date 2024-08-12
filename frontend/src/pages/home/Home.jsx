import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';
import { Hero } from './modules/hero/Hero';

const Home = () => {
  const home = gsap.timeline();

  return (
    <div>
      <Transition timeline={home} />
      <Hero />
     
    </div>
  );
};

export default Home;
