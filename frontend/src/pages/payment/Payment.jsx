import React from 'react';
import gsap from 'gsap';
import * as Styles from './PaymentStyles';
import { Transition } from '../../components/PageTransition';
import PaymentFeeCard from './PaymentFeeCard';
import trainingIcon from '../../assets/people.png';
import practicalIcon from '../../assets/training.png';
import earningsIcon from '../../assets/earnings.png';




const Payment = () => {
  const payment = gsap.timeline();

  return (
    <div>
      <Transition timeline={payment} />
      <Styles.PaymentContainer>
        <Styles.PaymentHeroContainer>
          <h2>
            The Training that <br /> makes you stand out!
          </h2>
          <p>
            EarnBigFromTech School was created with you in mind. Here we takes
            you through a journey of intensive learning to a journey of
            international learning and development and gets you ready for the
            workplace. Enroll today to become a top tech talent.
          </p>
        </Styles.PaymentHeroContainer>
        <Styles.PaymentInfoWrapper>
          <Styles.PaymentInfo>
            <Styles.PaymentInfoImg>
              <img src={trainingIcon} alt='' />
            </Styles.PaymentInfoImg>
            <h5>Expert Led live sessions</h5>
            <p>
              All classes in EarnBigFromTech school are taught by very
              experienced industry-specific practitioners and students also gain
              access to class recordings
            </p>
          </Styles.PaymentInfo>
          <Styles.PaymentInfo>
            <Styles.PaymentInfoImg>
              <img src={practicalIcon} alt='' />
            </Styles.PaymentInfoImg>
            <h5>Practical based training</h5>
            <p>
              Classes are practical and intensive deliberately as it helps to
              prepare you to hone your tech skill and get ready for the
              workplace.
            </p>
          </Styles.PaymentInfo>
          <Styles.PaymentInfo>
            <Styles.PaymentInfoImg>
              <img src={earningsIcon} alt='' />
            </Styles.PaymentInfoImg>
            <h5>Earning opportunities</h5>
            <p>
              With the end in mind, the program is designed deliberately to help
              you get ready to access top earning opportunities.
            </p>
          </Styles.PaymentInfo>
        </Styles.PaymentInfoWrapper>
        <Styles.PaymentDescription>
          <h4>We provide the best training programs in the industry.</h4>
          <p>
            We at EarnBigFromTech offer one of the very best training programs
            in the tech industry globally and are proud to open some of our
            training programs to allow more people to get into earning
            opportunities in tech.
          </p>
        </Styles.PaymentDescription>

        <div>
         
          <PaymentFeeCard />
        </div>
      </Styles.PaymentContainer>
    </div>
  );
};

export default Payment;
