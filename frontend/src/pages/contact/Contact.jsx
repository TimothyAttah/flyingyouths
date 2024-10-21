import React, { useRef } from 'react';
import gsap from 'gsap';
import * as Styles from './ContactStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import emailjs from '@emailjs/browser';

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Transition } from '../../components/PageTransition';

const Contact = () => {
  const contact = gsap.timeline();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m2a7umr', 'template_8i9m6ne', form.current, {
        publicKey: 'N_9mk8Pvh0tH0_BPD',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <Transition timeline={contact} />
      <Styles.ContactSection>
        <FadeIn delay={0.2} direction='down'>
          <Styles.SectionTitle>
            <Styles.Title>contact</Styles.Title>
            <Styles.SubTitle>have any question ?</Styles.SubTitle>
          </Styles.SectionTitle>
        </FadeIn>
        <Styles.ContactSectionWrapper>
          <FadeIn delay={0.4} direction='right'>
            <Styles.ContactInfo>
              <Styles.ContactInfoItem>
                <Styles.SvgBox>
                  <FaMapMarkerAlt />
                </Styles.SvgBox>
                <h3>Address</h3>
                <p>
                  {' '}
                  1, Ita-oloja Street, White House Bus Stop, Odogunyan, Ikorodu,
                  Lagos, Nigeria.
                </p>
              </Styles.ContactInfoItem>
              <Styles.ContactInfoItem>
                <Styles.SvgBox>
                  <FaPhone />
                </Styles.SvgBox>
                <h3>Call us</h3>
                <p>+2348038724054</p>
              </Styles.ContactInfoItem>
              {/* <Styles.ContactInfoItem>
                <Styles.SvgBox>
                  <FaEnvelope />
                </Styles.SvgBox>
                <h3>Email us</h3>
                <p>enochlouis1@gmail.com</p>
              </Styles.ContactInfoItem> */}
            </Styles.ContactInfo>
          </FadeIn>
          <Styles.ContactForm>
            <FadeIn delay={0.4} direction='left' fullWidth='true'>
              <form ref={form} onSubmit={sendEmail}>
                <Styles.InputBox>
                  <input
                    type='text'
                    placeholder='Name'
                    required
                    name='fullNames'
                  />
                </Styles.InputBox>
                <Styles.InputBox>
                  <input
                    type='text'
                    placeholder='Email'
                    required
                    name='email'
                  />
                </Styles.InputBox>

                <div>
                  <select>
                    <option>Item 1</option>
                    <option>Item 1</option>
                  </select>
                </div>
                <Styles.InputBox>
                  <input
                    type='text'
                    placeholder='Phone'
                    required
                    name='phoneNumber'
                  />
                </Styles.InputBox>
                <Styles.InputBox>
                  <textarea
                    type='text'
                    placeholder='Message'
                    required
                    name='message'
                  />
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
