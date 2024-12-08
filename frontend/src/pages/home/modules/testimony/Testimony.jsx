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
              <img src={item.icon} alt='' />
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
          Register today to be part of our next batch starting on 27th January,
          2025.
        </p>
        <Styles.EnrollButtonWrapper>
          <Styles.HeroButton>
            <Link to='/students/register'>
              <button>apply now</button>
            </Link>
          </Styles.HeroButton>
          <Styles.HeroButton>
            <Link to='/contact'>
              <button>Speak to our team</button>
            </Link>
          </Styles.HeroButton>
        </Styles.EnrollButtonWrapper>
      </Styles.EnrollWrapper>
    </>
  );
};
