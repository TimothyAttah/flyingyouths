import React from 'react'
import gsap from 'gsap';
import * as Styles from './PaymentStyles';
import { Transition } from '../../components/PageTransition';


const Payment = () => {
   const payment = gsap.timeline();
  return (
    <div>
      <Transition timeline={payment} />
      <h1>Pay</h1>
    </div>
  );
}

export default Payment
