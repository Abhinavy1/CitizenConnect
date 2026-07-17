const Complaint = require("../models/Complaint");

// ================= GET ALL COMPLAINTS =================

const getAllComplaints = async (req, res) => {
    try {

        const complaints = await Complaint.find()
            .populate("citizen", "firstName lastName email phone")
            .populate("assignedOfficer", "firstName lastName email")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "All complaints fetched successfully.",
            count: complaints.length,
            data: complaints
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ================= ASSIGN COMPLAINT =================

const assignComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.findById(req.params.id);

        if (!complaint) {

            return res.status(404).json({
                success: false,
                message: "Complaint not found."
            });

        }

        if (complaint.assignedOfficer) {

            return res.status(400).json({
                success: false,
                message: "Complaint is already assigned."
            });

        }

        complaint.assignedOfficer = req.user.id;
        complaint.assignedAt = new Date();
        complaint.status = "Assigned";

        await complaint.save();

        return res.status(200).json({
            success: true,
            message: "Complaint assigned successfully.",
            data: complaint
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ================= UPDATE COMPLAINT STATUS =================

const updateComplaintStatus = async (req, res) => {

    try {

        const { status } = req.body;

        const allowedStatus = [
            "Assigned",
            "In Progress",
            "Resolved",
            "Rejected"
        ];

        if (!allowedStatus.includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid complaint status."
            });
        }

        const complaint = await Complaint.findById(req.params.id);

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found."
            });
        }

        // Only assigned officer can update
        if (
            !complaint.assignedOfficer ||
            complaint.assignedOfficer.toString() !== req.user.id
        ) {
            return res.status(403).json({
                success: false,
                message: "You are not assigned to this complaint."
            });
        }

        complaint.status = status;

        await complaint.save();

        return res.status(200).json({
            success: true,
            message: "Complaint status updated successfully.",
            data: complaint
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ================= ADD REMARK =================

const addRemark = async (req, res) => {

    try {

        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                message: "Remark message is required."
            });
        }

        const complaint = await Complaint.findById(req.params.id);

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found."
            });
        }

        // Only assigned officer can add remarks
        if (
            !complaint.assignedOfficer ||
            complaint.assignedOfficer.toString() !== req.user.id
        ) {
            return res.status(403).json({
                success: false,
                message: "You are not assigned to this complaint."
            });
        }

        complaint.remarks.push({
            officer: req.user.id,
            message
        });

        await complaint.save();

        return res.status(200).json({
            success: true,
            message: "Remark added successfully.",
            data: complaint
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    getAllComplaints,
    assignComplaint,
    updateComplaintStatus,
    addRemark
};