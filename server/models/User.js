const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  userType: String, // 'user' or 'merchant'
});

const User = mongoose.model('User', userSchema);

module.exports = User;
