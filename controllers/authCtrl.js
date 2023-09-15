const Users = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authCtrl = {
  register: async (req, res) => {
    try {
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
