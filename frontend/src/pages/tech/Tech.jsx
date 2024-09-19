import React from 'react';
import { techsData } from './techData';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './TechStyles';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';

const Tech = () => {
  const tech = gsap.timeline();
  return (
    <>
      <Transition timeline={tech} />
      <Styles.TechsMainContainer>
        <h1>Tech</h1>
        <Styles.TechListsWrapper>
          {techsData.map((tech, i) => (
            <Styles.TechLists key={i}>
              <Styles.TechListsImg>
                <img src={tech.techPic} alt='' />
              </Styles.TechListsImg>
              <Styles.TechList>
                <Styles.TechListTitle>
                  <h3>{tech.techTitle}</h3>
                  <Styles.TechPrice>
                    <h5>{tech.techFee}</h5>
                    <h5>{tech.techDurations}</h5>
                  </Styles.TechPrice>
                </Styles.TechListTitle>
                <Styles.TechListDesc>
                  <p>{tech.techDescription}</p>
                </Styles.TechListDesc>
                <Styles.TechOutlines>
                  <h4>What you will learn</h4>
                  <ul>
                    {tech.techOutlines.map((outlines, i) => (
                      <li key={i}>{outlines}</li>
                    ))}
                  </ul>
                </Styles.TechOutlines>
              </Styles.TechList>
            </Styles.TechLists>
          ))}
        </Styles.TechListsWrapper>
      </Styles.TechsMainContainer>
    </>
  );
};

export default Tech;
