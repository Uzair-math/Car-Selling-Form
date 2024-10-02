// auth.js (Backend route for login)
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming this is your user model
const bcrypt = require('bcryptjs');

// POST /api/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email , password});
  
      // Send success response
    res.status(200).json({ message: 'Login successful' });
    console.log(user, "user");
    
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
