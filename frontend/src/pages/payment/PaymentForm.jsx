import React from 'react';
import { useNavigate } from 'react-router-dom';
import PaystackPop from '@paystack/inline-js';
import Backdrop from '../../components/Backdrop';
import * as Styles from './PaymentFormStyles';
import { user } from '../../components/Authentication';

const PaymentForm = ({ amount, paymentType, close }) => {
  const navigate = useNavigate();

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: 'pk_test_d2fdd83059f4346941d44f730d55cea9a35a17e4',
      amount: amount * 100,
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      phone: user.phoneNumber,

      onSuccess(transaction) {
        console.log('This is payment>>>>>', transaction);
      },
      onCancel() {
        console.log('You have canceled the transaction.');
      },
    });
  };

  return (
    <div>
      <Backdrop onClick={close} />
      <Styles.PaymentFormContainer>
        <Styles.PaymentFormInfo>
          {/* <h4>
            EarnBigFromTech School <br /> Week day({paymentType})
          </h4> */}
          {/* <p>
            Take advantage of this payment plan to become a highly sought after
            tech talent by enrolling in this intensive training in tech.
          </p> */}
        </Styles.PaymentFormInfo>
        <Styles.PaymentAccountDetails>
          <h5>Bank: GTB Bank</h5>
          <div>
            <p>A/c No: </p>
            <span>0113544333</span>
          </div>
          <div>
            <p>A/c Name: </p>
            <span>Enoch Louis Ventures Limited</span>
          </div>
          <br />
          <p>
            Send a screenshot of payment to <br />
            <b> enochlouis1@gmail.com</b>
            <br />
            or
            <br />
            Whatsapp num: <b>+2348038724054</b>
          </p>
        </Styles.PaymentAccountDetails>
        {/* <Styles.PaymentForm onSubmit={payWithPaystack}>
          <Styles.PaymentFormInputBoxWrapper>
            <Styles.PaymentFormInputBox>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' value={user.firstname} />
            </Styles.PaymentFormInputBox>
            <Styles.PaymentFormInputBox>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' value={user.lastname} />
            </Styles.PaymentFormInputBox>
          </Styles.PaymentFormInputBoxWrapper>
          <Styles.PaymentFormInputBox>
            <label htmlFor='email'>Email</label>
            <input type='email' value={user.email} />
          </Styles.PaymentFormInputBox>
          <Styles.PaymentFormInputBox>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input type='number' value={user.phoneNumber} />
          </Styles.PaymentFormInputBox>
          <Styles.PaymentFormInputBox>
            <label htmlFor='amount'>Amount</label>
            <input type='text' value={amount} disabled />
          </Styles.PaymentFormInputBox>
          <Styles.PaymentFormButton type='submit'>
            Pay Now
          </Styles.PaymentFormButton>
        </Styles.PaymentForm> */}
      </Styles.PaymentFormContainer>
    </div>
  );
};

export default PaymentForm;
