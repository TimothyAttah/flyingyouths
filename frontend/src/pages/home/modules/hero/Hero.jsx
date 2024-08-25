import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import * as Styles from './HeroStyles'

export const Hero = () => {
  return (
    <Styles.HeroContainer>
      <FadeIn delay={0.4} direction='down'>
        <h1>
          {/* Welcome to EarnBigFromTech centre for open distance and e-Learning */}
          Welcome to EarnBigFromTech school, powered by Enoch Louis Ventures
          LTD,
        </h1>
      </FadeIn>

      <FadeIn delay={0.5} direction='down'>
        <h1 className='right'>
          {/* Choosing the Right Education Level for Your Future Success */}
          we offer training in tech skills.
        </h1>
      </FadeIn>

      <FadeIn delay={0.6} direction='down' center='true'>
        <Styles.HeroSubTitle>
          Everyone deserves a super brighter future,
          <span> come even if you know nothing at all,</span> we are ready to
          train you from novice to become a tech expert in few weeks, check out
          our courses.
        </Styles.HeroSubTitle>
      </FadeIn>

      <FadeIn delay={0.4} direction='up' center='true'>
        <Styles.HeroButton>
          <Link to='/students/register'>
            <button>apply now</button>
          </Link>
        </Styles.HeroButton>
      </FadeIn>
    </Styles.HeroContainer>
  );
};
