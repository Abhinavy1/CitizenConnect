const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
    getDashboard,
    getAllUsers,
    promoteUser,
    demoteUser
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

// ================= PROMOTE USER =================

router.put(
    "/promote/:id",
    auth,
    authorizeRoles("admin"),
    promoteUser
);

// ================= DEMOTE USER =================

router.put(
    "/demote/:id",
    auth,
    authorizeRoles("admin"),
    demoteUser
);

module.exports = router;