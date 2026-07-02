const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
    getDashboard,
    getAllUsers
} = require("../controllers/adminController");

// ================= ADMIN DASHBOARD =================

router.get(
    "/dashboard",
    auth,
    authorizeRoles("admin"),
    getDashboard
);

// ================= VIEW ALL USERS =================

router.get(
    "/users",
    auth,
    authorizeRoles("admin"),
    getAllUsers
);

module.exports = router;