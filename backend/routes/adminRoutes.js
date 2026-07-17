const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
    getDashboard,
    getAnalytics,

    getCategoryAnalytics,
    getPriorityAnalytics,
    getStatusAnalytics,
    getLocationAnalytics,
    getMonthlyAnalytics,

    getAllUsers,
    promoteUser,
    demoteUser,
    blockUser,
    unblockUser
} = require("../controllers/adminController");

// ================= DASHBOARD =================

router.get(
    "/dashboard",
    auth,
    authorizeRoles("admin"),
    getDashboard
);

// ================= OVERALL ANALYTICS =================

router.get(
    "/analytics",
    auth,
    authorizeRoles("admin"),
    getAnalytics
);

// ================= CATEGORY ANALYTICS =================

router.get(
    "/analytics/category",
    auth,
    authorizeRoles("admin"),
    getCategoryAnalytics
);

// ================= PRIORITY ANALYTICS =================

router.get(
    "/analytics/priority",
    auth,
    authorizeRoles("admin"),
    getPriorityAnalytics
);

// ================= STATUS ANALYTICS =================

router.get(
    "/analytics/status",
    auth,
    authorizeRoles("admin"),
    getStatusAnalytics
);

// ================= LOCATION ANALYTICS =================

router.get(
    "/analytics/location",
    auth,
    authorizeRoles("admin"),
    getLocationAnalytics
);

// ================= MONTHLY ANALYTICS =================

router.get(
    "/analytics/monthly",
    auth,
    authorizeRoles("admin"),
    getMonthlyAnalytics
);

// ================= USERS =================

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