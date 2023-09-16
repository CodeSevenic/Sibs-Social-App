const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authCtrl = {
  register: async (req, res) => {
    try {
      const { fullname, username, email, password, gender } = req.body;
      let newUserName = username.toLowerCase().replace(/ /g, '');
      // check if username and email already exists
      const user_name = await Users.findOne({ username: newUserName });
      if (user_name) return res.status(400).json({ msg: 'This username already exists.' });
      const user_email = await Users.findOne({ email });
      if (user_email) return res.status(400).json({ msg: 'This email already exists.' });
      // check if password is at least 6 characters long
      if (password.length < 6)
        return res.status(400).json({ msg: 'Password must be at least 6 characters long.' });
      // Password Encryption
      const passwordHash = await bcrypt.hash(password, 12);

      // create new user
      const newUser = new Users({
        fullname,
        username: newUserName,
        email,
        password: passwordHash,
        gender,
      });

      const access_token = createAccessToken({ id: newUser._id });
      const refresh_token = createRefreshToken({ id: newUser._id });

      // Set a cookie named 'refreshtoken' with the value of the 'refresh_token' variable
      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path: '/api/refresh_token',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });

      await newUser.save();

      res.json({
        msg: 'Register success!',
        access_token,
        user: {
          ...newUser._doc,
          password: '',
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).populate('followers following', '-password');
    if (!user) return res.status(400).json({ msg: 'This email does not exist.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Password is incorrect.' });

    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    // Set a cookie named 'refreshtoken' with the value of the 'refresh_token' variable
    res.cookie('refreshtoken', refresh_token, {
      httpOnly: true,
      path: '/api/refresh_token',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    res.json({
      msg: 'Login success!',
      access_token,
      user: {
        ...user._doc,
        password: '',
      },
    });
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  generateAccessToken: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
};

module.exports = authCtrl;
