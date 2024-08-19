import React from 'react';
import gsap from 'gsap';
import * as Styles from './ContactStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Transition } from '../../components/PageTransition';

const Contact = () => {
  const contact = gsap.timeline();
  return (
    <div>
      <Transition timeline={contact} />
      <Styles.ContactSection>
        <FadeIn center='true' delay={0.2} direction='down'>
          <Styles.SectionTitle>
            <Styles.Title>contact</Styles.Title>
            <Styles.SubTitle>have any question ?</Styles.SubTitle>
          </Styles.SectionTitle>
        </FadeIn>
        <Styles.ContactSectionWrapper>
          <FadeIn delay={0.4} direction='right' center='true'>
            <Styles.ContactInfo>
              <Styles.ContactInfoItem>
                <Styles.SvgBox>
                  <FaMapMarkerAlt />
                </Styles.SvgBox>
                <h3>Address</h3>
                <p>White House Bus Stop, Odogunyan, Ikorodu, Lagos, Nigeria.</p>
              </Styles.ContactInfoItem>
              <Styles.ContactInfoItem>
                <Styles.SvgBox>
                  <FaPhone />
                </Styles.SvgBox>
                <h3>Call us</h3>
                <p>+2348038724054</p>
              </Styles.ContactInfoItem>
              <Styles.ContactInfoItem>
                <Styles.SvgBox>
                  <FaEnvelope />
                </Styles.SvgBox>
                <h3>Email us</h3>
                <p>enochlouis@gmail.com</p>
              </Styles.ContactInfoItem>
            </Styles.ContactInfo>
          </FadeIn>
          <Styles.ContactForm>
            <FadeIn delay={0.4} direction='left' center='true' fullWidth='true'>
              <form>
                <Styles.InputBox>
                  <input type='text' placeholder='Name' required />
                </Styles.InputBox>
                <Styles.InputBox>
                  <input type='text' placeholder='Email' required />
                </Styles.InputBox>
                <Styles.InputBox>
                  <input type='text' placeholder='Phone' required />
                </Styles.InputBox>
                <Styles.InputBox>
                  <textarea type='text' placeholder='Message' required />
                </Styles.InputBox>
                <Styles.BtnWrap>
                  <button type='submit'>Send Message</button>
                </Styles.BtnWrap>
              </form>
            </FadeIn>
          </Styles.ContactForm>
        </Styles.ContactSectionWrapper>
      </Styles.ContactSection>
    </div>
  );
};

export default Contact;
