const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
    createComplaint,
    getMyComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint
} = require("../controllers/complaintController");

const {
    createComplaintValidation,
    validate
} = require("../validators/complaintValidator");

// ================= CREATE COMPLAINT =================

router.post(
    "/",
    auth,
    createComplaintValidation,
    validate,
    createComplaint
);

// ================= GET MY COMPLAINTS =================

router.get(
    "/",
    auth,
    getMyComplaints
);

// ================= GET COMPLAINT BY ID =================

router.get(
    "/:id",
    auth,
    getComplaintById
);

// ================= UPDATE COMPLAINT =================

router.put(
    "/:id",
    auth,
    updateComplaint
);

// ================= DELETE COMPLAINT =================

router.delete(
    "/:id",
    auth,
    deleteComplaint
);

module.exports = router;