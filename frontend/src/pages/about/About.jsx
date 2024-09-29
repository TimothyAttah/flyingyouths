import React from 'react';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './AboutStyles';
import Team from './modules/team/Team';
import Testimony from './modules/testimony/Testimony';
import AboutUs from './modules/aboutUs/AboutUs';
import Programs from './modules/aboutPrograms/AboutPrograms';

const About = () => {
  const about = gsap.timeline();
  return (
    <>
      <Transition timeline={about} />
      <Styles.AboutContainer>
        <Styles.AboutImgContentWrapper>
          <Styles.AboutImgContent>
            <h6>Code with us</h6>
            <FadeIn center='true' delay={0.2} direction='down' fullWidth='true'>
              <h1>Let's help you attain excellence.</h1>
              <h1>This Training stands out</h1>
            </FadeIn>
            <FadeIn delay={0.4} direction='down'>
              <p>
                We offer quality teaching, with a step-by-step approach that
                suits your timeline. We follow American curriculum strictly.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} direction='down'>
              <p>
                To inspire and motivate learners to attain excellence through
                web based and distance teaching and learning.
              </p>
            </FadeIn>
          </Styles.AboutImgContent>
        </Styles.AboutImgContentWrapper>
      </Styles.AboutContainer>
      <AboutUs />
      <Testimony />
      {/* <Team /> */}
      {/* <Programs /> */}
    </>
  );
};

export default About;
