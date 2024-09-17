import React from 'react'
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import TeamLeader from '../../../../assets/team1.png'
import Dan from '../../../../assets/dan.png';
import Promise from '../../../../assets/promise.png';
import * as Styles from './WelcomeStyles'


export const Welcome = () => {
  return (
    <Styles.WelcomeContainer>
      <FadeIn delay={0.4} direction='right'>
        <Styles.WelcomeContentContainer>

        </Styles.WelcomeContentContainer>
      </FadeIn>

    </Styles.WelcomeContainer>
  );
}
