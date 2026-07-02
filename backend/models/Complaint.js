const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    complaintId: {
      type: String,
      unique: true,
    },

    // Citizen who created the complaint
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Officer assigned to this complaint
    assignedOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // Date when complaint was assigned
    assignedAt: {
      type: Date,
      default: null,
    },

    // Officer Remarks
    remarks: [
      {
        officer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },

        message: {
          type: String,
          required: true,
          trim: true,
        },

        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "Road",
        "Water",
        "Electricity",
        "Garbage",
        "Street Light",
        "Drainage",
        "Other",
      ],
      required: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Assigned",
        "In Progress",
        "Resolved",
        "Rejected",
      ],
      default: "Pending",
    },

    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Auto Generate Complaint ID
complaintSchema.pre("save", function () {
  if (!this.complaintId) {
    this.complaintId = `CC-${Date.now()}`;
  }
});

module.exports = mongoose.model("Complaint", complaintSchema);