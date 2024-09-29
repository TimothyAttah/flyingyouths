import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { techsData } from '../tech/techData';
import * as Styles from './PaymentFeeCardStyles';
import PaymentForm from './PaymentForm';

const PaymentFeeCard = () => {
  const course = useParams().course;
  const [oncePayment, setOncePayment] = useState(false);
  const [installmentPayment, setInstallmentPayment] = useState(false);
  const [earlyBidPayment, setEarlyBidPayment] = useState(false);

  return (
    <Styles.PaymentFeeCardContainer>
      <Styles.PaymentFeeCardTitle>
        Programs Payment <span>Plans For</span>
      </Styles.PaymentFeeCardTitle>
      <div>
        {techsData.map(
          (item) =>
            item.techLink === course && (
              <Styles.PaymentFeeCard key={item.techTitle}>
                <Styles.PaymentFeeCardName>
                  {item.techTitle}
                </Styles.PaymentFeeCardName>
                <Styles.PaymentFeeCardBoxWrapper>
                  <Styles.PaymentFeeCardBox>
                    <Styles.PaymentFeeType>
                      One time payment
                    </Styles.PaymentFeeType>
                    <Styles.PaymentInitialFee>
                      {item.techFee}
                    </Styles.PaymentInitialFee>
                    <Styles.PaymentFee>
                      {Number(item.techPaymentFee) - 50000}
                    </Styles.PaymentFee>
                    <Styles.PaymentCourseClasses>
                      Weekdays classes <br />
                      Mondays, Tuesday & Fridays <br />
                      {item.techDurations}
                    </Styles.PaymentCourseClasses>
                    <Styles.PaymentDecision>
                      {/* Balance {(Number(item.techPaymentFee) - 50000) / 2} at
                      week 3 of the program */}
                    </Styles.PaymentDecision>
                    <Styles.PaymentButton onClick={() => setOncePayment(true)}>
                      select
                    </Styles.PaymentButton>
                    {oncePayment && (
                      <PaymentForm
                        amount={Number(item.techPaymentFee) - 50000}
                        paymentType='One Time Payment'
                        close={() => setOncePayment(false)}
                      />
                    )}
                  </Styles.PaymentFeeCardBox>
                  <Styles.PaymentFeeCardBox>
                    <Styles.PaymentFeeType>
                      Installments payment
                    </Styles.PaymentFeeType>
                    <Styles.PaymentInitialFee>
                      {item.techFee}
                    </Styles.PaymentInitialFee>
                    <Styles.PaymentFee>
                      {(Number(item.techPaymentFee) - 50000) / 2}
                    </Styles.PaymentFee>
                    <Styles.PaymentCourseClasses>
                      Weekdays classes <br />
                      Mondays, Tuesday & Fridays <br />
                      {item.techDurations}
                    </Styles.PaymentCourseClasses>
                    <Styles.PaymentDecision>
                      Balance {(Number(item.techPaymentFee) - 50000) / 2} at
                      week 3 of the program
                    </Styles.PaymentDecision>
                    <Styles.PaymentButton
                      onClick={() => setInstallmentPayment(true)}
                    >
                      select
                    </Styles.PaymentButton>
                    {installmentPayment && (
                      <PaymentForm
                        amount={(Number(item.techPaymentFee) - 50000) / 2}
                        paymentType='Installment'
                        close={() => setInstallmentPayment(false)}
                      />
                    )}
                  </Styles.PaymentFeeCardBox>

                  <Styles.PaymentFeeCardBox>
                    <Styles.PaymentFeeType>
                      Early bid registation
                    </Styles.PaymentFeeType>
                    <Styles.PaymentInitialFee>
                      {item.techFee}
                    </Styles.PaymentInitialFee>
                    <Styles.PaymentFee>
                      {Number(item.techPaymentFee) - 70000}
                    </Styles.PaymentFee>
                    <Styles.PaymentCourseClasses>
                      Weekdays classes <br />
                      Mondays, Tuesday & Fridays <br />
                      {item.techDurations}
                    </Styles.PaymentCourseClasses>
                    <Styles.PaymentDecision>
                      Available till October 20th, 2024
                    </Styles.PaymentDecision>
                    <Styles.PaymentButton
                      onClick={() => setEarlyBidPayment(true)}
                    >
                      select
                    </Styles.PaymentButton>
                    {earlyBidPayment && (
                      <PaymentForm
                        amount={Number(item.techPaymentFee) - 70000}
                        paymentType='Early Bid'
                        close={() => setEarlyBidPayment(false)}
                      />
                    )}
                  </Styles.PaymentFeeCardBox>
                </Styles.PaymentFeeCardBoxWrapper>
              </Styles.PaymentFeeCard>
            ),
        )}
      </div>
    </Styles.PaymentFeeCardContainer>
  );
};

export default PaymentFeeCard;
