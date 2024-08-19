import React from 'react'
import { FadeIn } from '../../components/fadeIn/FadeIn'
import * as Styles from './FaqsStyles';
import { faqsData } from './faqsData';
import gsap from 'gsap';
import { Transition } from '../../components/PageTransition';

const Faqs = () => {
  const faqs = gsap.timeline();

  return (
    <>
      <Transition timeline={faqs} />
      <Styles.FaqsContainerWrapper>
        <Styles.FaqsContainer>
          <FadeIn center='true' delay={0.2} direction='down' fullWidth='true'>
            <h2>frequently asked questions</h2>
          </FadeIn>
          {faqsData.map((faq, i) => (
            <Styles.FaqTab key={i}>
              <FadeIn delay={(i + 1) * 0.2} direction='left' fullWidth>
                <input type='radio' name='faq' id={faq.id} />
                <label htmlFor={faq.id}>
                  <h2>{faq.faqNum}</h2>
                  <h3>{faq.title}</h3>
                </label>
                <Styles.FaqContent>
                  <p>{faq.content}</p>
                </Styles.FaqContent>
              </FadeIn>
            </Styles.FaqTab>
          ))}
        </Styles.FaqsContainer>
      </Styles.FaqsContainerWrapper>
    </>
  );
}

export default Faqs
