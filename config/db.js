// This is the file we will use Mongoose to connect to our MongoDB DataBase

const mongoose = require("mongoose");

// We will call Mongoose Connect (since it returns a promise we'll use async/await):
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
