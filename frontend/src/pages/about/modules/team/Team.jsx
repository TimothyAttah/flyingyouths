import React from 'react'
import * as Styles from './TeamStyles'
import { FadeIn } from '../../../../components/fadeIn/FadeIn';
import team1 from '../../../../assets/team1.png'
import team2 from '../../../../assets/team4.png';
import team3 from '../../../../assets/team3.png';


const Team = () => {
  return (
    <div>
      <Styles.AboutTeamContainer>
        <FadeIn delay={0.7} direction='up'>
          <h4>meet the team</h4>
          <p>
            The Leadership and Team of EarnBigFromTech Bootcamp Centre For Open
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
    </div>
  );
}

export default Team
