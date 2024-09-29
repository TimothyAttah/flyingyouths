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
        <Styles.TechSubTitle>
          Select your course and register today to be part of our next cohort
          starting on 20th October, 2024.
        </Styles.TechSubTitle>
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
