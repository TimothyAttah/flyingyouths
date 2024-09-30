import React from 'react';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';
import { Hero } from './modules/hero/Hero';
// import Slider from './modules/slider/Slider';
import { Testimony } from './modules/testimony/Testimony';
import Testimonial from './modules/testimony/Testimonial';

const Home = () => {
  const home = gsap.timeline();

  return (
    <div>
      <Transition timeline={home} />
      <Hero />
      {/* <ReasonsPage /> */}
      <Testimony />
      {/* <Slider /> */}
      <Testimonial />
    </div>
  );
};

export default Home;
