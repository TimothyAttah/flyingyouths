import React from 'react';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';
import { Hero } from './modules/hero/Hero';
import { Welcome } from './modules/welcome/Welcome';
// import Slider from './modules/slider/Slider';
import Reasons from './modules/reasons/Reasons';

const Home = () => {
  const home = gsap.timeline();

  return (
    <div>
      <Transition timeline={home} />
      <Hero />
      <Reasons />
      <Welcome />
      {/* <Slider /> */}
    </div>
  );
};

export default Home;
