const valid = ({ fullname, username, email, password, cf_password, gender }) => {
  const err = {};

  if (!fullname) {
    err.fullname = 'Please add your full name.';
  } else if (fullname.length > 25) {
    err.fullname = 'Full name is up to 25 characters long.';
  }
  if (!username) {
    err.username = 'Please add your username.';
  } else if (username.length > 25) {
    err.username = 'Full name is up to 25 characters long.';
  }
};
