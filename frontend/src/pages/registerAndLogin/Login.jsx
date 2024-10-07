import React from 'react';
import gsap from 'gsap';
import RegisterForm from '../../components/forms/RegisterForm';
import { Transition } from '../../components/PageTransition';
import * as Styles from './RegisterAndLoginStyles';
import LoginForm from '../../components/forms/LoginForm';

const Login = () => {
  const registerAndLogin = gsap.timeline();
  return (
    <div>
      <Transition timeline={registerAndLogin} />
      <Styles.SignupContainer>
        <h2>Login</h2>
        <LoginForm />
      </Styles.SignupContainer>
    </div>
  );
};

export default Login;
