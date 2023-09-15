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
      console.log('Hashed Password: ', passwordHash);

      console.log(newUserName);
      return res.json({ msg: 'Successfully Registered!' });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
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

module.exports = authCtrl;
