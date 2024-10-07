import React, { useState } from 'react';
import { FaAt, FaPhoneAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import * as Styles from './RegisterAndLoginFormStyle';
import { loginUser } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: '',
    phoneNumber: '',
  });

  const { email, phoneNumber } = userData;

  const handleUserInputData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
    // navigate('/tech-skills');
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleUserSubmit}>
        <Styles.InputBoxWrapper>
          <Styles.InputBox>
            <span>
              <FaAt />
            </span>
            <input
              type='email'
              placeholder='email address'
              name='email'
              value={email}
              onChange={handleUserInputData}
            />
          </Styles.InputBox>
        </Styles.InputBoxWrapper>

        <Styles.InputBoxWrapper>
          <Styles.InputBox>
            <span>
              <FaPhoneAlt />
            </span>
            <input
              type='text'
              placeholder='phone number'
              name='phoneNumber'
              value={phoneNumber}
              onChange={handleUserInputData}
            />
          </Styles.InputBox>
        </Styles.InputBoxWrapper>

        <Styles.HeroButton>
          <button>Login</button>
        </Styles.HeroButton>

        <Styles.SmallLink>
          Don't have an account? <Link to='/students/register'>Register here</Link>
        </Styles.SmallLink>
      </form>
    </>
  );
};

export default LoginForm;
