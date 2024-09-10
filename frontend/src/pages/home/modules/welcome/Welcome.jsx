import React from 'react'
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import TeamLeader from '../../../../assets/team1.png'
import * as Styles from './WelcomeStyles'


export const Welcome = () => {
  return (
    <Styles.WelcomeContainer>
      <FadeIn delay={0.4} direction='right'>
        <Styles.WelcomeContentContainer>
          {/* <h4>Welcome Address</h4> */}
          <h4>Hear what our students says: Testimony</h4>
          {/*
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
          </p> */}

          <p>
            "EBT coding bootcamp is more than just a learning experience- It's a
            transformative journey into the world of technology. They pride us
            on offering an immersive, hands-on curriculum that equips our
            students with skills needed to excel in tech industry. With expert
            instructors, personalized mentorship, and a focus on real-world
            applications, they ensure that every participant leaves not only
            with knowledge but with the confidence to launch a successful
            career. Join us and be part of a community that fosters innovation,
            collaboration, and growth."
          </p>
          <br />
          <p>Welcome!</p>
          <Styles.DirectorName>
            <span className='line' />
            Mr Enoch Louis Omotayo, Director EarnBigFromTech
          </Styles.DirectorName>
        </Styles.WelcomeContentContainer>
      </FadeIn>
      <FadeIn delay={0.4} direction='left'>
        <Styles.WelcomeImgContainer>
          <img src={TeamLeader} alt='' />
        </Styles.WelcomeImgContainer>
      </FadeIn>
    </Styles.WelcomeContainer>
  );
}
