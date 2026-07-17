const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const officerRoutes = require("./routes/officerRoutes");
const adminRoutes = require("./routes/adminRoutes");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

// Swagger API Documentation
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

app.use(logger);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "CitizenConnect API Running 🚀"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/officer", officerRoutes);
app.use("/api/admin", adminRoutes);

app.use(errorHandler);

module.exports = app;