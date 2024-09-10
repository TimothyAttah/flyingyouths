import React from 'react';
import vic1 from '../../../../assets/vic1.mp4';
import vic2 from '../../../../assets/vic2.mp4';
import * as Styles from './TestimonyStyles';

const Testimony = () => {
  return (
    <Styles.TestimonyContainer>
      <Styles.TestimonyInfoContainer>
        <h2>What makes us different?</h2>
        <p>
          At EarnBigWithTech, we offer professional tech trainings in Graphic
          design, Product design, Web Development and Data Analysis. We go far
          and beyond training to create the neccessary exposure that our
          trainees need to launch their careers and excel in the field of tech
          through our mentorship and intership programs.
        </p>
        <p>
          Our training facilities are seasoned and well respected professionals
          who have achieved competence through years of practical experience.
          Our courses are 100% practical and tailored to meet the individual
          needs of our trainees.
        </p>
      </Styles.TestimonyInfoContainer>
      <Styles.TestimonyVideoContainer>
        <h2>Listen to our students</h2>
        <div>
          <Styles.TestimonyVideo>
            <video src={vic1} controls='true'></video>
          </Styles.TestimonyVideo>
          <Styles.TestimonyVideo>
            <video src={vic2} controls='true'></video>
          </Styles.TestimonyVideo>
        </div>
      </Styles.TestimonyVideoContainer>
    </Styles.TestimonyContainer>
  );
};

export default Testimony;
