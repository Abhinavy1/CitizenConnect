import { motion } from "framer-motion";
import {
  MapPinned,
  CalendarDays,
  Flag,
  Building2,
  Share2,
  Printer,
} from "lucide-react";

export default function TrackingHeader() {
  // Temporary mock data
  // Replace with API data later

  const complaint = {
    id: "CC-2026-001245",
    title: "Large Pothole Near Main Market",
    category: "Road Damage",
    status: "In Progress",
    priority: "High",
    department: "Municipal Corporation",
    createdAt: "14 July 2026",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-r
        from-slate-900
        via-slate-900
        to-cyan-950/40
        p-8
        shadow-xl
      "
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              {complaint.id}
            </span>

            <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
              {complaint.priority}
            </span>

            <span className="rounded-full bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-400">
              {complaint.status}
            </span>

          </div>

          <h1 className="mt-6 text-4xl font-black text-white">
            {complaint.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-6">

            <div className="flex items-center gap-2 text-slate-400">

              <MapPinned
                size={18}
                className="text-cyan-400"
              />

              {complaint.category}

            </div>

            <div className="flex items-center gap-2 text-slate-400">

              <CalendarDays
                size={18}
                className="text-cyan-400"
              />

              {complaint.createdAt}

            </div>

            <div className="flex items-center gap-2 text-slate-400">

              <Building2
                size={18}
                className="text-cyan-400"
              />

              {complaint.department}

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex gap-4">

          <button
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-slate-900
              px-6
              py-4
              text-white
              transition
              hover:border-cyan-500
            "
          >
            <Share2 size={20} />

            Share

          </button>

          <button
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-6
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
            "
          >
            <Printer size={20} />

            Print

          </button>

        </div>

      </div>

      {/* Status Banner */}

      <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

        <div className="flex items-center gap-3">

          <Flag
            size={22}
            className="text-emerald-400"
          />

          <p className="text-slate-300">

            Your complaint has been assigned to the{" "}
            <span className="font-semibold text-white">
              {complaint.department}
            </span>
            . The assigned officer is currently reviewing your complaint.

          </p>

        </div>

      </div>

    </motion.div>
  );
}