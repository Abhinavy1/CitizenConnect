const User = require("../models/User");
const Complaint = require("../models/Complaint");

// ================= ADMIN DASHBOARD =================

const getDashboard = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalCitizens = await User.countDocuments({
            role: "citizen"
        });

        const totalOfficers = await User.countDocuments({
            role: "officer"
        });

        const totalAdmins = await User.countDocuments({
            role: "admin"
        });

        const totalComplaints = await Complaint.countDocuments();

        const pendingComplaints = await Complaint.countDocuments({
            status: "Pending"
        });

        const assignedComplaints = await Complaint.countDocuments({
            status: "Assigned"
        });

        const inProgressComplaints = await Complaint.countDocuments({
            status: "In Progress"
        });

        const resolvedComplaints = await Complaint.countDocuments({
            status: "Resolved"
        });

        const rejectedComplaints = await Complaint.countDocuments({
            status: "Rejected"
        });

        return res.status(200).json({
            success: true,
            message: "Dashboard fetched successfully.",
            data: {
                totalUsers,
                totalCitizens,
                totalOfficers,
                totalAdmins,
                totalComplaints,
                pendingComplaints,
                assignedComplaints,
                inProgressComplaints,
                resolvedComplaints,
                rejectedComplaints
            }
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
// ================= GET ALL USERS =================

const getAllUsers = async (req, res) => {
    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const search = req.query.search || "";
        const role = req.query.role || "";

        const filter = {};

        if (search) {
            filter.$or = [
                { firstName: { $regex: search, $options: "i" } },
                { lastName: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { phone: { $regex: search, $options: "i" } }
            ];
        }

        if (role) {
            filter.role = role;
        }

        const users = await User.find(filter)
            .select("-password")
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const total = await User.countDocuments(filter);

        return res.status(200).json({
            success: true,
            message: "Users fetched successfully.",
            total,
            page,
            totalPages: Math.ceil(total / limit),
            data: users
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
    getDashboard,
    getAllUsers
};