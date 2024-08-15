import React from 'react'
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import TeamLeader from '../../../../assets/team1.png'
import * as Styles from './WelcomeStyles'


export const Welcome = () => {
  return (
    <Styles.WelcomeContainer>
      <FadeIn>
        <Styles.WelcomeContentContainer>
          <h4>Welcome Address</h4>
          <p>
            You are welcome to Flyingyouths Centre for Open Distance and
            e-Learning. We aim to provide excellent faith-based affordable
            higher education in TECH via ICT supported open and distance
            learning delivery mode.
          </p>
          <p>
            Flyingyouths equips learners with functional literacies, skills and
            competencies needed to develop expertise in a variety of relevant
            disciplines in the contemporary technological knowledge driven
            society while inculcating ethical value of integrity, responsibility
            and accountability, among others. We achieve this by deploying and
            providing robust learner support to our pool of diverse learners.
            Undoubtedly, we are bridging the gap between academia and the
            industry through the balanced syllabus, project-based learning,
            continuous industry interactions and internships, learner motivation
            and capacity development.
          </p>
          <br />
          <p>
            I trust that you will be embrace this initiative of charting a new
            course for leveraging e-learning in delivering a robust and
            transformational education.
          </p>
          <br />
          <p>Welcome!</p>
          <Styles.DirectorName>
            <span className='line' />
            Mr Enoch Louis Omotayo, Director Flyingyouths
          </Styles.DirectorName>
          {/* <small>
            <span className='line' />
            <p>Mr Enoch Louis Omotayo, Director Flyingyouths</p>
          </small> */}
        </Styles.WelcomeContentContainer>
      </FadeIn>
      <FadeIn>
        <Styles.WelcomeImgContainer>
          <img src={TeamLeader} alt='' />
        </Styles.WelcomeImgContainer>
      </FadeIn>
    </Styles.WelcomeContainer>
  );
}
