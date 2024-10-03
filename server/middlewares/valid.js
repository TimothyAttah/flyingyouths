export const validRegister = async (req, res, next) => {
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
    paymentTerms,
    programAdvert,
    termsAndConditions,
  } = req.body;

  if (!firstname)
    return res.status(400).json({ msg: 'Please enter your first name.' });

  if (!lastname)
    return res.status(400).json({ msg: 'Please enter your last name.' });

  if (!phoneNumber) {
    return res.status(400).json({ msg: 'Please enter your phone number.' });
  }

  if (!dateOfBirth)
    return res.status(400).json({ msg: 'Please enter your date of birth.' });

  if (!email) {
    return res.status(400).json({ msg: 'Please enter your email address.' });
  } else if (!validateEmail(email)) {
    return res.status(400).json({ msg: 'Invalid Email. Format is incorrect.' });
  }

  if (!stateOfResidence)
    return res
      .status(400)
      .json({ msg: 'Please choose your state of residence.' });

  if (!courseToLearn)
    return res.status(400).json({ msg: 'Please choose your course.' });

  if (!highestQualification)
    return res
      .status(400)
      .json({ msg: 'Please choose your highest qualification.' });

  if (!intentions)
    return res
      .status(400)
      .json({ msg: 'Please state your course intentions.' });

  if (!paymentTerms)
    return res.status(400).json({ msg: 'Please accept payment terms.' });

  if (!programAdvert)
    return res
      .status(400)
      .json({ msg: 'Please choose how you heard about us.' });

  if (!termsAndConditions)
    return res.status(400).json({ msg: 'Please accept terms and conditions.' });

  // if (!password) {
  //   return res.status(400).json({ msg: 'Please enter your password.' });
  // } else if (password.length < 6) {
  //   return res
  //     .status(400)
  //     .json({ msg: 'Password must be at least 6 chars long.' });
  // }

  next();
};

export const validLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ msg: 'Please enter your email address.' });
  } else if (!validateEmail(email)) {
    return res.status(400).json({ msg: 'Invalid Email. Format is incorrect.' });
  }

  if (!password) {
    return res.status(400).json({ msg: 'Please enter your password.' });
  } else if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: 'Password must be at least 6 chars long.' });
  }

  next();
};

const validPhone = (phone) => {
  const re = /^[+]/g;
  return re.test(phone);
};

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
