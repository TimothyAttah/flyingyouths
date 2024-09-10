import React from 'react'
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import * as Styles from './AboutUsStyles'
import backroundPic from '../../../../assets/student5.png';


const AboutUs = () => {
  return (
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
              EarnBigFromTech Bootcamp Centre for Open Distance and e-Learning
              is poised to harness innovative approaches to provide the missing
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
                To be the first-class instition that builds servant leaders for
                a better world through faith based education driven by ICT.
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
  );
}

export default AboutUs
