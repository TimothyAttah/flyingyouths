import React from 'react';
import { useParams } from 'react-router-dom';
import * as Styles from './RegisterSuccessfulStyles'

import { techsData } from '../tech/techData';
import PaymentFeeCard from '../payment/PaymentFeeCard';

const user = JSON.parse(localStorage.getItem('user'));

const RegisterSuccessful = () => {
  return (
    <Styles.RegisterSuccessfulContainer>
      <h1>
        Welcome {user.firstname} {user.lastname}
      </h1>
      <PaymentFeeCard />
    </Styles.RegisterSuccessfulContainer>
  );
};

export default RegisterSuccessful;
