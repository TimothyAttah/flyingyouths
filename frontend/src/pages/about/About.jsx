import React from 'react';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './AboutStyles';
import backroundPic from '../../assets/jungle.jpg';
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team4.png';
import team3 from '../../assets/team3.png';

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
      <Styles.AboutMainContainer>
        <FadeIn delay={0.4} direction='right'>
          <Styles.AboutInfoImgContainer>
            <img src={backroundPic} alt='' />
          </Styles.AboutInfoImgContainer>
        </FadeIn>
        <Styles.AboutInfoContainer>
          <FadeIn delay={0.2} direction='left'>
            <h3>about us </h3>
          </FadeIn>
          <FadeIn delay={0.4} direction='left'>
            <Styles.AboutMainInfoContainer>
              <p>
                Flyingyouths Bootcamp Centre for Open Distance and e-Learning is
                poised to harness innovative approaches to provide the missing
                links in traditional methodologies of teaching and learning in
                contemporary times. The lacuna in face-to-face teaching is
                undebatable, thus, the need to outstrip digitizing traditional
                materials is imperative. Accordingly, our robust learning
                experience integrates and embeds e-learning at the pedagogical,
                technological and organizational levels to deliver a world class
                education, that integrates faith and learning for post-secondary
                and lifelong learners with least disruption to their daily
                economic and workplace routine.
              </p>
            </Styles.AboutMainInfoContainer>
          </FadeIn>
          <Styles.AboutInfoOptionsContainer>
            <FadeIn delay={0.5} direction='up'>
              <Styles.AboutInfoOptions>
                <h4>Comprehensive curriculum</h4>
                <p>
                  A well-structured syllabus covering a range of programming
                  languages.
                </p>
              </Styles.AboutInfoOptions>
            </FadeIn>
            <FadeIn delay={0.6} direction='up'>
              <Styles.AboutInfoOptions>
                <h4>Expert Instructors</h4>
                <p>Experienced professionals to provide quality mentorship</p>
              </Styles.AboutInfoOptions>
            </FadeIn>
            <FadeIn delay={0.7} direction='up'>
              <Styles.AboutInfoOptions>
                <h4>Project-Based Learning</h4>
                <p>
                  Emphasis on practicals to apply and reinforce the concepts
                  learned
                </p>
              </Styles.AboutInfoOptions>
            </FadeIn>
            <FadeIn delay={0.7} direction='up'>
              <Styles.AboutInfoOptions>
                <h4>our vision</h4>
                <p>
                  To be the first-class instition that builds servant leaders
                  for a better world through faith based education driven by
                  ICT.
                </p>
              </Styles.AboutInfoOptions>
            </FadeIn>
            <FadeIn delay={0.7} direction='up'>
              <Styles.AboutInfoOptions>
                <h4>our mission</h4>
                <p>
                  To inspire and motivate learners to attain excellence through
                  web based and distance teaching and learning.
                </p>
              </Styles.AboutInfoOptions>
            </FadeIn>
          </Styles.AboutInfoOptionsContainer>
        </Styles.AboutInfoContainer>
      </Styles.AboutMainContainer>
      <Styles.AboutTeamContainer>
        <FadeIn delay={0.7} direction='up'>
          <h4>meet the team</h4>
          <p>
            The Leadership and Team of Flyingyouths Bootcamp Centre For Open
            Distance and e-Learning
          </p>
        </FadeIn>
        <Styles.AboutTeamImgContainer>
          <FadeIn delay={0.7} direction='right'>
            <Styles.AboutTeamImgBox>
              <img src={team1} alt='' />
            </Styles.AboutTeamImgBox>
          </FadeIn>
          <FadeIn delay={0.8} direction='right'>
            <Styles.AboutTeamImgBox>
              <img src={team2} alt='' />
            </Styles.AboutTeamImgBox>
          </FadeIn>
          <FadeIn delay={0.9} direction='right'>
            <Styles.AboutTeamImgBox>
              <img src={team3} alt='' />
            </Styles.AboutTeamImgBox>
          </FadeIn>
        </Styles.AboutTeamImgContainer>
      </Styles.AboutTeamContainer>
      <FadeIn delay={0.9} direction='up'>
        <Styles.ApplyNowContainer>
          <p>Ready to take your career to the next next level?</p>
          <button>apply now</button>
        </Styles.ApplyNowContainer>
      </FadeIn>
    </>
  );
};

export default About;
