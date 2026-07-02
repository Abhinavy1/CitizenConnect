const Complaint = require("../models/Complaint");
const ApiResponse = require("../utils/apiResponse");

// ================= CREATE COMPLAINT =================

const createComplaint = async (req, res) => {
    try {

        const {
            title,
            description,
            category,
            priority,
            location
        } = req.body;

        if (!title || !description || !category || !location) {
            return ApiResponse.error(
                res,
                "Please fill all required fields.",
                400
            );
        }

        const complaint = await Complaint.create({
            citizen: req.user.id,
            title,
            description,
            category,
            priority,
            location
        });

        return ApiResponse.success(
            res,
            "Complaint Submitted Successfully",
            complaint,
            null,
            201
        );

    } catch (error) {

        console.error(error);

        return ApiResponse.error(
            res,
            error.message,
            500
        );

    }
};

// ================= GET MY COMPLAINTS =================

const getMyComplaints = async (req, res) => {
    try {

        const {
            page = 1,
            limit = 5,
            status,
            category,
            priority,
            search,
            sort = "newest"
        } = req.query;

        const query = {
            citizen: req.user.id
        };

        if (status) query.status = status;
        if (category) query.category = category;
        if (priority) query.priority = priority;

        if (search) {
            query.$or = [
                {
                    title: {
                        $regex: search,
                        $options: "i"
                    }
                },
                {
                    description: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ];
        }

        const sortOption =
            sort === "oldest"
                ? { createdAt: 1 }
                : { createdAt: -1 };

        const skip = (Number(page) - 1) * Number(limit);

        const totalComplaints = await Complaint.countDocuments(query);

        const complaints = await Complaint.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(Number(limit));

        return res.status(200).json({
            success: true,
            message: "Complaints fetched successfully.",
            totalComplaints,
            currentPage: Number(page),
            totalPages: Math.ceil(totalComplaints / Number(limit)),
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

// ================= GET COMPLAINT BY ID =================

const getComplaintById = async (req, res) => {

    try {

        const complaint = await Complaint.findOne({
            _id: req.params.id,
            citizen: req.user.id
        });

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Complaint fetched successfully.",
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

// ================= UPDATE COMPLAINT =================

const updateComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.findOne({
            _id: req.params.id,
            citizen: req.user.id
        });

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found."
            });
        }

        if (complaint.status !== "Pending") {
            return res.status(400).json({
                success: false,
                message: "Complaint cannot be updated after processing starts."
            });
        }

        const {
            title,
            description,
            category,
            priority,
            location
        } = req.body;

        if (title) complaint.title = title;
        if (description) complaint.description = description;
        if (category) complaint.category = category;
        if (priority) complaint.priority = priority;
        if (location) complaint.location = location;

        await complaint.save();

        return res.status(200).json({
            success: true,
            message: "Complaint updated successfully.",
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

// ================= DELETE COMPLAINT =================

const deleteComplaint = async (req, res) => {

    try {

        const complaint = await Complaint.findOne({
            _id: req.params.id,
            citizen: req.user.id
        });

        if (!complaint) {
            return res.status(404).json({
                success: false,
                message: "Complaint not found."
            });
        }

        if (complaint.status !== "Pending") {
            return res.status(400).json({
                success: false,
                message: "Complaint cannot be deleted after processing starts."
            });
        }

        await complaint.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Complaint deleted successfully."
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
    createComplaint,
    getMyComplaints,
    getComplaintById,
    updateComplaint,
    deleteComplaint
};