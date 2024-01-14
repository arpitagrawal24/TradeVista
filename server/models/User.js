const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userType: String, // 'user' or 'merchant'
  dateCreated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
