import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import * as Styles from './HeroStyles'

export const Hero = () => {
  return (
    <Styles.HeroContainer>
      <FadeIn delay={0.4} direction='down'>
        <h1>
          Welcome to flyingyouths.tech centre for open distance and e-Learning
        </h1>
      </FadeIn>

      <FadeIn delay={0.5} direction='down'>
        <h1 className='right'>
          Choosing the Right Education Level for Your Future Success
        </h1>
      </FadeIn>

      <FadeIn delay={0.6} direction='down' center='true'>
        <Styles.HeroSubTitle>
          Explore different education levels and find the perfect fit for your
          future success. Discover the benefits of each level and take the next
          step towards achieving your goals.
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
