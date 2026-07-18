const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("==================================");
    console.log("✅ MongoDB Connected Successfully");
    console.log(`Database : ${conn.connection.name}`);
    console.log("==================================");
  } catch (err) {
    console.error("❌ Database Connection Failed");
    console.error("Error Name:", err.name);
    console.error("Error Message:", err.message);

    process.exit(1);
  }
};

module.exports = connectDB;