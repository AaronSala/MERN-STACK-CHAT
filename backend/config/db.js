const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //userNewUrlParser: true,
      //useUnifieldTopology: true,
    });
    console.log(`mongodb connected ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
