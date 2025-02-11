import React from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../nav/Nav';
import * as Styles from './FooterStyles';
import { FadeIn } from '../fadeIn/FadeIn';

const Footer2 = () => {
  return (
    <Styles.FooterContainer>
      <Styles.FooterDetailsMainContainer>
        <FadeIn delay={0.2} direction='up'>
          <Styles.FooterDetailsInfoContainer>
            <h2>EarnBigFromTech</h2>
            <p>
              EarnBigFromTech improves the economic outcomes of individuals by
              equipping them with premium technology skills, business skills and
              life skills.
            </p>
          </Styles.FooterDetailsInfoContainer>
        </FadeIn>
        <FadeIn delay={0.3} direction='up'>
          <Styles.FooterDetailsPagesContainer>
            <p>EarnBigFromTech Pages</p>
            <ul>
              {navData.map((nav) => (
                <li key={nav.path}>
                  <Link to={nav.path}>{nav.navName}</Link>
                </li>
              ))}
            </ul>
          </Styles.FooterDetailsPagesContainer>
        </FadeIn>
        <FadeIn delay={0.3} direction='up'>
          <Styles.FooterDetailsFormContainer>
            <h4>Join our list!</h4>
            <p>
              Stay up-to-date with latest tech news, freebies and special offers
            </p>
            <form>
              <Styles.FooterDetailsInputBox>
                <div>
                  <label htmlFor='firstName'>First Name</label>
                  <input type='text' name='firstName' id='firstName' />
                </div>
                <div>
                  <label htmlFor='lastName'>Last Name</label>
                  <input type='text' name='lastName' id='lastName' />
                </div>
              </Styles.FooterDetailsInputBox>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' />
              </div>

              <button>Get Started</button>
            </form>
          </Styles.FooterDetailsFormContainer>
        </FadeIn>
      </Styles.FooterDetailsMainContainer>
      <Styles.FooterDetailsContainer>
        <h4> &copy;2025. EarnBigFromTech. All Rights Reserved.</h4>
      </Styles.FooterDetailsContainer>
    </Styles.FooterContainer>
  );
};

export default Footer2;
