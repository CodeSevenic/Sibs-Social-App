const valid = ({ fullname, username, email, password, cf_password }) => {
  const err = {};

  if (!fullname) {
    err.fullname = 'Please add your full name.';
  } else if (fullname.length > 25) {
    err.fullname = 'Full name is up to 25 characters long.';
  }

  if (!username) {
    err.username = 'Please add your username.';
  } else if (username.replace(/ /g, '').length > 25) {
    err.username = 'Username is up to 25 characters long.';
  }

  if (!email) {
    err.email = 'Please add your email.';
  } else if (!validateEmail(email)) {
    err.email = 'Email format is incorrect.';
  }

  if (!password) {
    err.password = 'Please add your password.';
  } else if (password.length < 6) {
    err.password = 'Password must be at least 6 characters.';
  }

  if (!cf_password) {
    err.cf_password = 'Please add your confirm password.';
  } else if (password !== cf_password) {
    err.cf_password = 'Confirm password did not match.';
  }

  // Calculate if there are no errors
  const noError = Object.keys(err).length === 0;

  console.log('No Error?: ', noError);

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
    noError,
  };
};

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

export default valid;
