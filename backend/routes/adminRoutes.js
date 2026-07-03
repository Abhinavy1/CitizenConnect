const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
    getDashboard,
    getAllUsers,
    promoteUser,
    demoteUser,
    blockUser,
    unblockUser,
    getAnalytics
} = require("../controllers/adminController");

// ================= ADMIN DASHBOARD =================

router.get(
    "/dashboard",
    auth,
    authorizeRoles("admin"),
    getDashboard
);

// ================= ANALYTICS =================

router.get(
    "/analytics",
    auth,
    authorizeRoles("admin"),
    getAnalytics
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

// ================= BLOCK USER =================

router.put(
    "/block/:id",
    auth,
    authorizeRoles("admin"),
    blockUser
);

// ================= UNBLOCK USER =================

router.put(
    "/unblock/:id",
    auth,
    authorizeRoles("admin"),
    unblockUser
);

module.exports = router;