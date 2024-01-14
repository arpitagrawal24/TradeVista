require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
