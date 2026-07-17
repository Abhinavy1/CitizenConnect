import { motion } from "framer-motion";
import {
  Hash,
  FolderOpen,
  FileText,
  CalendarDays,
  Flag,
  Building2,
  MapPin,
  ImageIcon,
  RefreshCcw,
} from "lucide-react";

export default function ComplaintInfoCard() {
  // Mock Data
  // Replace with API later

  const complaint = {
    id: "CC-2026-001245",
    category: "Road Damage",
    title: "Large Pothole Near Main Market",
    description:
      "A large pothole has developed near the main market entrance. It is causing traffic congestion and is dangerous for two-wheelers, especially during rainy conditions.",

    submittedOn: "14 July 2026 • 09:10 AM",
    priority: "High",
    department: "Municipal Corporation",

    address:
      "Near Main Market, Model Town, Jalandhar, Punjab",

    attachments: 4,

    updated: "15 July 2026 • 11:40 AM",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-8
        shadow-xl
      "
    >
      {/* Header */}

      <div className="mb-8">

        <h2 className="text-3xl font-black text-white">
          Complaint Information
        </h2>

        <p className="mt-2 text-slate-400">
          Complete details submitted by the citizen.
        </p>

      </div>

      {/* Information */}

      <div className="grid gap-6 lg:grid-cols-2">

        <InfoItem
          icon={Hash}
          title="Complaint ID"
          value={complaint.id}
        />

        <InfoItem
          icon={FolderOpen}
          title="Category"
          value={complaint.category}
        />

        <InfoItem
          icon={CalendarDays}
          title="Submitted On"
          value={complaint.submittedOn}
        />

        <InfoItem
          icon={Flag}
          title="Priority"
          value={complaint.priority}
        />

        <InfoItem
          icon={Building2}
          title="Department"
          value={complaint.department}
        />

        <InfoItem
          icon={ImageIcon}
          title="Attachments"
          value={`${complaint.attachments} Images`}
        />

      </div>

      {/* Title */}

      <div className="mt-8 rounded-2xl bg-slate-950 p-6">

        <div className="mb-3 flex items-center gap-3">

          <FileText
            size={20}
            className="text-cyan-400"
          />

          <h3 className="font-bold text-white">
            Complaint Title
          </h3>

        </div>

        <p className="text-lg font-semibold text-white">
          {complaint.title}
        </p>

      </div>

      {/* Description */}

      <div className="mt-6 rounded-2xl bg-slate-950 p-6">

        <div className="mb-3 flex items-center gap-3">

          <FileText
            size={20}
            className="text-cyan-400"
          />

          <h3 className="font-bold text-white">
            Description
          </h3>

        </div>

        <p className="leading-8 text-slate-300">
          {complaint.description}
        </p>

      </div>

      {/* Address */}

      <div className="mt-6 rounded-2xl bg-slate-950 p-6">

        <div className="mb-3 flex items-center gap-3">

          <MapPin
            size={20}
            className="text-cyan-400"
          />

          <h3 className="font-bold text-white">
            Complaint Address
          </h3>

        </div>

        <p className="leading-7 text-slate-300">
          {complaint.address}
        </p>

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <div className="flex items-center gap-3">

          <RefreshCcw
            size={20}
            className="text-cyan-400"
          />

          <span className="text-slate-300">

            Last Updated :
            <span className="ml-2 font-semibold text-white">

              {complaint.updated}

            </span>

          </span>

        </div>

      </div>

    </motion.div>
  );
}

function InfoItem({
  icon: Icon,
  title,
  value,
}) {
  return (
    <div className="rounded-2xl bg-slate-950 p-5">

      <div className="flex items-center gap-3">

        <Icon
          size={18}
          className="text-cyan-400"
        />

        <span className="text-sm text-slate-400">
          {title}
        </span>

      </div>

      <p className="mt-4 text-lg font-semibold text-white">
        {value}
      </p>

    </div>
  );
}