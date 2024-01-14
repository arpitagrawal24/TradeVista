const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.use(express.json());

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const user = new User({ username, password, userType });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful!' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
