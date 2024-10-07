import React from 'react'
import gsap from 'gsap';
import RegisterForm from '../../components/forms/RegisterForm';
import { Transition } from '../../components/PageTransition';
import * as Styles from './RegisterAndLoginStyles'

const RegisterAndLogin = () => {
   const registerAndLogin = gsap.timeline();
  return (
    <div>
      <Transition timeline={registerAndLogin} />
      <Styles.SignupContainer>
        <h2>Register</h2>
        <RegisterForm />
      </Styles.SignupContainer>
    </div>
  );
}

export default RegisterAndLogin

