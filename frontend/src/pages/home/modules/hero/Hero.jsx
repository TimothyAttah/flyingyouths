import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import * as Styles from './HeroStyles';
import student1 from '../../../../assets/student1.png';
import student2 from '../../../../assets/student8.png';
import student3 from '../../../../assets/pix1.png';
import heroBg from '../../../../assets/heroPix33.png';

export const Hero = () => {
  return (
    <div>
      <Styles.HeroContainer>
        <div>
          <img src={heroBg} alt='' />
        </div>

        <div></div>
        <FadeIn delay={0.4} direction='down'>
          <h1>
            {/* Welcome to EarnBigFromTech centre for open distance and e-Learning */}
            Welcome to EarnBigFromTech Academy, powered by Enoch Louis Ventures
            LTD.
          </h1>
        </FadeIn>

        <FadeIn delay={0.5} direction='down'>
          <h1 className='right' >
            {/* Choosing the Right Education Level for Your Future Success */}
             Unlock Your Future with In-Demand
            Tech Skills! Join Our Expert-Led Classes and Start Earning Big.
            Enroll Now for Physical Training at Odogunyan, Ikorodu, Lagos State!
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} direction='down' center='true'>
          <Styles.HeroSubTitle>
            Everyone deserves a super brighter future,
            <span> come even if you know nothing at all,</span> we are ready to
            train you from novice to become a tech expert in four months earn
            big.
          </Styles.HeroSubTitle>
        </FadeIn>

        <FadeIn delay={0.4} direction='up' center='true'>
          <Styles.HeroButton>
            <Link to='/students/register'>
              <button>apply now</button>
            </Link>
          </Styles.HeroButton>
        </FadeIn>

        <Styles.HeroImageContainer>
          <img src={student3} alt='' />
          <small>Successful Students</small>
        </Styles.HeroImageContainer>

        <Styles.AboutUsContainer>
          {/* <Styles.AboutUsPixContainer>
            <Styles.AboutUsPixItemContainer>
              <img src={student3} alt='' />
            </Styles.AboutUsPixItemContainer>
            <Styles.AboutUsPixItemContainer>
              <Styles.AboutUsPixItem>
                <img src={student1} alt='' />
              </Styles.AboutUsPixItem>
              <Styles.AboutUsPixItem>
                <img src={student2} alt='' />
              </Styles.AboutUsPixItem>
            </Styles.AboutUsPixItemContainer>
          </Styles.AboutUsPixContainer> */}

          {/* <Styles.AboutUsInfoContainer>
            <h2> Design your future today</h2>
            <p>
              EarnBigFromTech improves the economic outcomes of individuals by
              equipping them with premium technology skills, business skills and
              life skills.
            </p>
            <Link to='/about_us'>About us</Link>
          </Styles.AboutUsInfoContainer> */}
        </Styles.AboutUsContainer>
      </Styles.HeroContainer>
    </div>
  );
};
