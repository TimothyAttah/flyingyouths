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
import { registerUser } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    stateOfResidence: '',
    courseToLearn: '',
    highestQualification: '',
    intentions: '',
    // paymentTerms: '',
    programAdvert: [],
    termsAndConditions: '',
  });

  const {
    firstname,
    lastname,
    email,
    phoneNumber,
    dateOfBirth,
    stateOfResidence,
    courseToLearn,
    highestQualification,
    intentions,
  } = userData;

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

  const handleUserInputData = (e) => {
    if (e.target.name === 'programAdvert') {
      let copy = { ...userData };
      if (e.target.checked) {
        copy.programAdvert.push(e.target.value);
      } else {
        copy.programAdvert = copy.programAdvert.filter(
          (el) => el !== e.target.value,
        );
      }
      setUserData(copy);
    } else if (e.target.name === 'paymentTerms') {
      let isSelected = e.target.checked;
      let copy = { ...userData };
      copy.paymentTerms = isSelected;
      setUserData(copy);
    } else if (e.target.name === 'termsAndConditions') {
      let isSelected = e.target.checked;
      let copy = { ...userData };
      copy.termsAndConditions = isSelected;
      setUserData(copy);
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));

    setTimeout(() => {}, 300);
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleUserSubmit}>
        <Styles.InputBoxWrapper>
          <label htmlFor=''>First Name:</label>
          <Styles.InputBox>
            <span>
              <FaUserAlt />
            </span>
            <input
              type='text'
              placeholder='First Name'
              name='firstname'
              value={firstname}
              onChange={handleUserInputData}
            />
          </Styles.InputBox>
          <label htmlFor=''>Last Name:</label>

          <Styles.InputBox primary='true'>
            <span>
              <FaUserAlt />
            </span>
            <input
              type='text'
              placeholder='last Name'
              name='lastname'
              value={lastname}
              onChange={handleUserInputData}
            />
          </Styles.InputBox>
        </Styles.InputBoxWrapper>
        <Styles.InputBoxWrapper>
          <label htmlFor=''>Email:</label>

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
          <label htmlFor=''>Phone Number:</label>

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
          <label htmlFor=''>DOB:</label>
          <Styles.InputBox primary='true'>
            <span>
              <FaCalendar />
            </span>
            <input
              type='date'
              placeholder='date of birth'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={handleUserInputData}
            />
          </Styles.InputBox>
        </Styles.InputBoxWrapper>

        {/* <Styles.PasswordInputBox>
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
        </Styles.PasswordInputBox> */}

        <Styles.SelectBox>
          <select
            id='states'
            name='stateOfResidence'
            value={stateOfResidence}
            onChange={handleUserInputData}
          >
            <option value=''>State of residence</option>
            <option value='Abia'>Abia</option>
            <option value='Adamawa'>Adamawa</option>
            <option value='Akwa Ibom'>Akwa Ibom</option>
            <option value='Anambra'>Anambra</option>
            <option value='Bauchi'>Bauchi</option>
            <option value='Bayelsa'>Bayelsa</option>
            <option value='Benue'>Benue</option>
            <option value='Borno'>Borno</option>
            <option value='Cross River'>Cross River</option>
            <option value='Delta'>Delta</option>
            <option value='Ebonyi'>Ebonyi</option>
            <option value='Edo'>Edo</option>
            <option value='Ekiti'>Ekiti</option>
            <option value='Enugu'>Enugu</option>
            <option value='Gombe'>Gombe</option>
            <option value='Imo'>Imo</option>
            <option value='Jigawa'>Jigawa</option>
            <option value='Kaduna'>Kaduna</option>
            <option value='Kano'>Kano</option>
            <option value='Katsina'>Katsina</option>
            <option value='Kebbi'>Kebbi</option>
            <option value='Kogi'>Kogi</option>
            <option value='Kwara'>Kwara</option>
            <option value='Lagos'>Lagos</option>
            <option value='Nasarawa'>Nasarawa</option>
            <option value='Niger'>Niger</option>
            <option value='Ogun'>Ogun</option>
            <option value='Ondo'>Ondo</option>
            <option value='Osun'>Osun</option>
            <option value='Oyo'>Oyo</option>
            <option value='Plateau'>Plateau</option>
            <option value='Rivers'>Rivers</option>
            <option value='Sokoto'>Sokoto</option>
            <option value='Taraba'>Taraba</option>
            <option value='Yobe'>Yobe</option>
            <option value='Zamfara'>Zamfara</option>
            <option value='FCT'>FCT</option>
          </select>
        </Styles.SelectBox>

        <Styles.InputBoxWrapper>
          <Styles.SelectBox>
            <select
              id='tech-skills'
              name='courseToLearn'
              value={courseToLearn}
              onChange={handleUserInputData}
            >
              <option value=''>Select a Tech Course:</option>
              <option value='Web Development'>
                Web Development (MERN){' '}
                {/* <span
                  style={{
                    textDecoration: 'line-through',
                    display: 'inline-block',
                  }}
                >
                  (₦400,000){' '}
                </span>{' '} */}
                <span>(₦250,000) </span>
              </option>
              <option value='cybersecurity'>
                Cybersecurity{' '}
                {/* <span style={{ textDecoration: 'line-through' }}>
                  (₦400,000){' '}
                </span>{' '} */}{' '}
                <span>(₦200,000) </span>
              </option>
              <option value='data-analysis'>
                Data Analysis
                {/* <span style={{ textDecoration: 'line-through' }}>
                  (₦450,000){' '}
                </span>{' '} */}{' '}
                <span>(₦200,000) </span>
              </option>
              <option value='Artificial Intelligence (AI) and Machine Learning'>
                Artificial Intelligence (AI) and Machine Learning
                {/* <span style={{ textDecoration: 'line-through' }}>
                  (₦1,750,000)
                </span>{' '} */}{' '}
                <span>(₦500,000) </span>
              </option>
              {/* <option value='App Development'>
                App Development (₦500,000)
              </option>
              <option value='Graphic Design'>Graphic Design (₦350,000)</option>
              <option value='Video Editing'>Video Editing (₦350,000)</option>
              <option value='Digital Marketing'>
                Digital Marketing (₦350,000)
              </option>
              <option value='Data Analytics'>Data Analytics (₦360,000)</option>
              <option value='Game Development'>
                Game Development (₦650,000)
              </option>
              <option value='Cybersecurity'>Cybersecurity (₦350,000)</option>
              <option value='3D Modeling and Animation'>
                3D Modeling and Animation (₦650,000)
              </option> */}

              {/* <option value='Blockchain Development'>
                Blockchain Development (₦1,250,000)
              </option>
              <option value='Content Creation'>
                Content Creation (₦320,000)
              </option> */}
            </select>
          </Styles.SelectBox>
          <Styles.SelectBox>
            <select
              id='qualification'
              name='highestQualification'
              value={highestQualification}
              onChange={handleUserInputData}
            >
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
        <textarea
          id=''
          placeholder='What do you intend to do?'
          name='intentions'
          value={intentions}
          onChange={handleUserInputData}
          style={{
            border: '1px solid #333',
            width: '100%',
            height: '250px ',
            padding: '10px',
            borderRadius: '10px',
          }}
        />

        {/* <Styles.TermsAndConditions>
          <div>
            <input
              type='checkbox'
              name='paymentTerms'
              onChange={handleUserInputData}
            />
          </div>
          <h5>
            If you are selected, are you ready to pay 80% of your tuition fee to
            secure your slot for this course and get N50,000 discount?
          </h5>
        </Styles.TermsAndConditions> */}

        {/* <div>
          <h4>What course are you enrolling for?</h4>
          <div>
            <input type='radio' name='course' id='product-design' />
            <label htmlFor='product-design'>Product Design</label>
          </div>
          <div>
            <input type='radio' name='course' id='product-management' />
            <label htmlFor='product-management'>Product Management</label>
          </div>
        </div> */}

        {/* <div>
          <h4>Which of these options applies to you?</h4>
          <div>
            <input type='radio' name='status' id='student' />
            <label htmlFor='student'>Currently a student</label>
          </div>
          <div>
            <input type='radio' name='status' id='employed' />
            <label htmlFor='employed'>Employed</label>
          </div>
          <div>
            <input type='radio' name='status' id='unemployed' />
            <label htmlFor='unemployed'>Unemployed</label>
          </div>
          <div>
            <input type='radio' name='status' id='self-employed' />
            <label htmlFor='self-employed'>Self-Employed</label>
          </div>
          <div>
            <input type='radio' name='status' id='serving' />
            <label htmlFor='serving'> I am Currently Serving</label>
          </div>
        </div> */}

        {/* <div>
          <h4>What's your preferred tuition payment option?</h4>
          <div>
            <input type='radio' name='payment' id='early-payment' />
            <label htmlFor='early-payment'>
              Early bid registration - N300,000 (ends 20/09/2024)
            </label>
          </div>
          <div>
            <input type='radio' name='payment' id='once-payment' />
            <label htmlFor='once-payment'>One time payment - N300,000</label>
          </div>
          <div>
            <input type='radio' name='payment' id='installments-payment' />
            <label htmlFor='installments-payment'>
              Pay in installments - N350,000 (Pay N200,000 for start and
              N150,000 balance at week 3 of the program)
            </label>
          </div>
        </div> */}

        <div style={{ margin: '40px 0' }}>
          <h4>How did you hear about this program?</h4>
          <Styles.CheckboxWrapper>
            <label htmlFor='social-media'>Social Media</label>
            <input
              type='checkbox'
              id='social-media'
              name='programAdvert'
              value='social-media'
              onChange={handleUserInputData}
            />
          </Styles.CheckboxWrapper>
          <Styles.CheckboxWrapper>
            <label htmlFor='friend-family'>Friends / Family</label>
            <input
              type='checkbox'
              id='friend-family'
              name='programAdvert'
              value='friend-family'
              onChange={handleUserInputData}
            />
          </Styles.CheckboxWrapper>
          <Styles.CheckboxWrapper>
            <label htmlFor='email'>Email</label>
            <input
              type='checkbox'
              id='email'
              name='programAdvert'
              value='email'
              onChange={handleUserInputData}
            />
          </Styles.CheckboxWrapper>
          <Styles.CheckboxWrapper>
            <label htmlFor='other'>Other</label>
            <input
              type='checkbox'
              id='other'
              name='programAdvert'
              value='other'
              onChange={handleUserInputData}
            />
          </Styles.CheckboxWrapper>
        </div>

        <Styles.TermsAndConditions>
          <div>
            <input
              type='checkbox'
              name='termsAndConditions'
              onChange={handleUserInputData}
            />
          </div>
          <small>
            {/* I agree to the <Link>terms and conditions.</Link> */}I agree to
            the terms and conditions.
          </small>
        </Styles.TermsAndConditions>

        <Styles.HeroButton>
          <button>Submit</button>
        </Styles.HeroButton>

        <Styles.SmallLink>
          Already have an account? <Link to='/students/login'>Login here</Link>
        </Styles.SmallLink>
      </form>
    </>
  );
};

export default RegisterForm;
