const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

const {
    getAllComplaints,
    assignComplaint,
    updateComplaintStatus,
    addRemark
} = require("../controllers/officerController");

// ================= VIEW ALL COMPLAINTS =================

router.get(
    "/complaints",
    auth,
    authorizeRoles("officer"),
    getAllComplaints
);

// ================= ASSIGN COMPLAINT =================

router.put(
    "/assign/:id",
    auth,
    authorizeRoles("officer"),
    assignComplaint
);

// ================= UPDATE STATUS =================

router.put(
    "/status/:id",
    auth,
    authorizeRoles("officer"),
    updateComplaintStatus
);

// ================= ADD REMARK =================

router.post(
    "/remark/:id",
    auth,
    authorizeRoles("officer"),
    addRemark
);

module.exports = router;