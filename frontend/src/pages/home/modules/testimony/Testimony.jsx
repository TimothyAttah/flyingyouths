import React from 'react';
import { reasonsData } from '../reasons/reasonsData';
import * as Styles from './testimonyStyles';
import pix1 from '../../../../assets/promise.png';
import pix2 from '../../../../assets/dan.png';
import { Link } from 'react-router-dom';

export const Testimony = () => {
  return (
    <>
      <Styles.ReasonsTitle>why EarnBigFromTech?</Styles.ReasonsTitle>
      <Styles.ReasonsListsContainer>
        {reasonsData.map((item, i) => (
          <Styles.ReasonsList key={i}>
            <Styles.ReasonsListIcon>
              <img src={item.icon} alt="" />
            </Styles.ReasonsListIcon>

            <Styles.ReasonsListInfo>
              <h4>{item.title}</h4>
              <p>{item.reason}</p>
            </Styles.ReasonsListInfo>
          </Styles.ReasonsList>
        ))}
      </Styles.ReasonsListsContainer>

      <Styles.EnrollWrapper>
        <h2>Your time is now</h2>
        <p>
          Register today to be part of our next batch starting on 20th
          October, 2024.
        </p>
        <Styles.EnrollButtonWrapper>
          <Styles.HeroButton>
            <Link to='/students/register'>
              <button>apply now</button>
            </Link>
          </Styles.HeroButton>
          <Styles.HeroButton>
            <Link to='/students/register'>
              <button>Speak to our team</button>
            </Link>
          </Styles.HeroButton>
        </Styles.EnrollButtonWrapper>
      </Styles.EnrollWrapper>
      <Styles.TestimonyWrapper>
        <h2>Hear what our students says: Testimony</h2>
        <div>
          <Styles.TestimonyName>
            <Styles.TestimonyImg>
              <img src={pix1} alt='' />
            </Styles.TestimonyImg>
            <>Promise Osasu .E</>
          </Styles.TestimonyName>
          <p>
            I recently completed my full stack web development training at Enoch
            Louis coding Bootcamp and I am happier with my choice and
            experience. The instructor is very supportive and very intelligent I
            have so much respect for him, The workload was challenging but very
            rewarding. I learnt so so much in a very short amount of time and
            I'm confident in my ability to build fully responsive full stack
            applications. If you're looking to go into tech, I highly recommend
            EBT powered by Enoch Louis coding Bootcamp
          </p>
        </div>
        <div>
          <Styles.TestimonyName>
            <Styles.TestimonyImg>
              <img src={pix2} alt='' />
            </Styles.TestimonyImg>
            <>Daniel Shobowale .O</>
          </Styles.TestimonyName>

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
        </div>
      </Styles.TestimonyWrapper>
    </>
  );
};
