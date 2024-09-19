import React from 'react';
import { techsData } from './techData';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './TechStyles';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';
import TechListCard from './TechListCard';

const Tech = () => {
  const tech = gsap.timeline();
  return (
    <>
      <Transition timeline={tech} />

      <Styles.TechsMainContainer>
        <Styles.TechTitle>Our Tech Courses</Styles.TechTitle>
        <Styles.TechWrapper>
          {techsData.map((item, i) => (
            <TechListCard key={i} data={item} />
          ))}
        </Styles.TechWrapper>
      </Styles.TechsMainContainer>
    </>
  );
};

export default Tech;
