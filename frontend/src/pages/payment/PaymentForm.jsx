import React from 'react';
import { useNavigate } from 'react-router-dom';
import Backdrop from '../../components/Backdrop';
import * as Styles from './PaymentFormStyles';

const PaymentForm = ({ amount, paymentType, close }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Backdrop onClick={close} />
      <Styles.PaymentFormContainer>
        <Styles.PaymentFormInfo>
          <h4>
            EarnBigFromTech School <br /> Week day({paymentType})
          </h4>
          <p>
            Take advantage of this payment plan to become a highly sought after
            tech talent by enrolling in this intensive training in tech.
          </p>
        </Styles.PaymentFormInfo>
        <Styles.PaymentForm>
          <Styles.PaymentFormInputBoxWrapper>
            <Styles.PaymentFormInputBox>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' />
            </Styles.PaymentFormInputBox>
            <Styles.PaymentFormInputBox>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' />
            </Styles.PaymentFormInputBox>
          </Styles.PaymentFormInputBoxWrapper>
          <Styles.PaymentFormInputBox>
            <label htmlFor='email'>Email</label>
            <input type='email' />
          </Styles.PaymentFormInputBox>
          <Styles.PaymentFormInputBox>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='number' />
          </Styles.PaymentFormInputBox>
          <Styles.PaymentFormInputBox>
            <label htmlFor='amount'>Amount</label>
            <input type='text' value={amount} disabled />
          </Styles.PaymentFormInputBox>
          <Styles.PaymentFormButton>Pay Now</Styles.PaymentFormButton>
        </Styles.PaymentForm>
      </Styles.PaymentFormContainer>
    </div>
  );
};

export default PaymentForm;
