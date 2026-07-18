const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Auth Route Working 🚀"
    });
});

const {
    register,
    login
} = require("../controllers/authController");

router.post("/register", register);

router.post("/login", login);

module.exports = router;