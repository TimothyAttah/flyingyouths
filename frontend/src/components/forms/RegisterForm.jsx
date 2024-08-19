import React, { useEffect, useState } from 'react';
import {
  FaUserAlt,
  FaAt,
  FaPhoneAlt,
  FaEye,
  FaEyeSlash,
  FaKey,
  FaCalendar,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Styles from './RegisterAndLoginFormStyle';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function checkPasswordStrength(password) {
    // Implement your password strength logic here
    let strength = 0;

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      strength++;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      strength++;
    }

    // Check for numbers
    if (/\d/.test(password)) {
      strength++;
    }

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength++;
    }

    return strength;
  }

  useEffect(() => {
    document.getElementById('password')?.addEventListener('input', function () {
      let meter = document.getElementById('password-strength-meter');
      let strength = checkPasswordStrength(this.value);
      meter.value = strength;
    });
  }, []);

  return (
    <>
      <form action=''>
        <Styles.InputBoxWrapper>
          <Styles.InputBox>
            <span>
              <FaUserAlt />
            </span>
            <input type='text' placeholder='First Name' />
          </Styles.InputBox>
          <Styles.InputBox primary='true'>
            <span>
              <FaUserAlt />
            </span>
            <input type='text' placeholder='last Name' />
          </Styles.InputBox>
        </Styles.InputBoxWrapper>
        <Styles.InputBoxWrapper>
          <Styles.InputBox>
            <span>
              <FaAt />
            </span>
            <input type='email' placeholder='email address' />
          </Styles.InputBox>
        </Styles.InputBoxWrapper>

        <Styles.InputBoxWrapper>
          <Styles.InputBox>
            <span>
              <FaPhoneAlt />
            </span>
            <input type='number' placeholder='phone number' />
          </Styles.InputBox>
          <Styles.InputBox primary='true'>
            <span>
              <FaCalendar />
            </span>
            <input type='date' placeholder='date of birth' />
          </Styles.InputBox>
        </Styles.InputBoxWrapper>

        <Styles.PasswordInputBox>
          <Styles.InputBox>
            <span>
              <FaKey />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='password'
              id='password'
            />
            <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
          </Styles.InputBox>
          <div>
            <div id='password-strength-meter-container'>
              <label htmlFor='password-strength-meter'>
                Password Strength:
              </label>
              <meter max='4' id='password-strength-meter'></meter>
            </div>
            <small onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'hide password' : 'show password'}
            </small>
          </div>
        </Styles.PasswordInputBox>
        <Styles.PasswordInputBox>
          <Styles.InputBox>
            <span>
              <FaKey />
            </span>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='confirm password'
            />
            <span>{showConfirmPassword ? <FaEye /> : <FaEyeSlash />}</span>
          </Styles.InputBox>
          <small onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? 'hide password' : 'show password'}
          </small>
        </Styles.PasswordInputBox>

        <Styles.InputBoxWrapper>
          <Styles.SelectBox>
            <select name='program' id='program'>
              <option value=''>select program</option>
              <option value='ms-word'>Microsoft word</option>
              <option value='ms-excel'>Microsoft excel</option>
              <option value='robotics'>Robotics</option>
              <option value='frontend-development'>frontend development</option>
              <option value='backend-development'>backend development</option>
              <option value='fullstack-development'>
                fullstack development
              </option>
            </select>
          </Styles.SelectBox>
          <Styles.SelectBox>
            <select name='qualification' id='qualification'>
              <option value=''>select highest qualification</option>
              <option value='primary'>primary</option>
              <option value='still_in_senior_secondary_school'>
                Still in Senior Secondary School
              </option>
              <option value='ssce'>SSCE</option>
              <option value='ond'>OND</option>
              <option value='hnd'>HND</option>
              <option value='bsc'>BSc</option>
              <option value='msc'>MSc</option>
              <option value='phd'>PhD</option>
            </select>
          </Styles.SelectBox>
        </Styles.InputBoxWrapper>
        <Styles.TermsAndConditions>
          <div>
            <input type='checkbox' />
          </div>
          <small>
            I agree to the <Link>terms and conditions</Link> listed.
          </small>
        </Styles.TermsAndConditions>
      </form>
    </>
  );
};

export default RegisterForm;
