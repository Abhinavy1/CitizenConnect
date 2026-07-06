require("dotenv").config();
console.log("MONGO_URI =", process.env.MONGO_URI);

const app = require("./app");
const connectDB = require("./config/db");
const listEndpoints = require("express-list-endpoints");

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Print all registered routes
console.log("===== REGISTERED ROUTES =====");
console.log(listEndpoints(app));
console.log("=============================");

// Start Server
app.listen(PORT, () => {
    console.log("==================================");
    console.log(`🚀 CitizenConnect Server Running`);
    console.log(`🌐 http://localhost:${PORT}`);
    console.log("==================================");
});