const mongoose = require("mongoose");

const connectDB = async () => {
 HEAD
  try {
    console.log("Connecting to MongoDB...");
    console.log(process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("==================================");
    console.log("✅ MongoDB Connected Successfully");
    console.log(`Database : ${conn.connection.name}`);
    console.log("==================================");

  } catch (err) {

    console.error("❌ Database Connection Failed");
    console.error("Error Name:", err.name);
    console.error("Error Message:", err.message);
    console.error("Full Error:", err);

    process.exit(1);
  }

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log("==================================");
        console.log("✅ MongoDB Connected Successfully");
        console.log(`Database : ${conn.connection.name}`);
        console.log("==================================");

    } catch (err) {

        console.error("❌ Database Connection Failed");
        console.error(err.message);
        process.exit(1);

    }

};

module.exports = connectDB;