const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const officerRoutes = require("./routes/officerRoutes");
const adminRoutes = require("./routes/adminRoutes");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

/* ============================
   CORS
============================ */

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://citizen-connect-sigma.vercel.app",
];

app.use(
    cors({
        origin(origin, callback) {

            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            console.log("Blocked Origin:", origin);

            return callback(new Error("Not Allowed By CORS"));
        },

        credentials: true
    })
);

/* ============================
   Body Parser
============================ */

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ============================
   Logger
============================ */

app.use(logger);

/* ============================
   Swagger
============================ */

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

/* ============================
   Health Check
============================ */

app.get("/", (req, res) => {

    return res.json({
        success: true,
        message: "CitizenConnect API Running 🚀"
    });

});

/* ============================
   Debug Route
============================ */

app.get("/test", (req, res) => {

    return res.json({
        success: true,
        message: "Server Working"
    });

});

/* ============================
   Routes
============================ */

console.log("Loading Auth Routes...");

app.use("/api/auth", authRoutes);

console.log("Auth Routes Mounted Successfully.");

app.use("/api/users", userRoutes);

app.use("/api/complaints", complaintRoutes);

app.use("/api/officer", officerRoutes);

app.use("/api/admin", adminRoutes);

/* ============================
   404
============================ */

app.use((req, res) => {

    return res.status(404).json({
        success: false,
        message: "Route Not Found"
    });

});

/* ============================
   Error Handler
============================ */

app.use(errorHandler);

module.exports = app;