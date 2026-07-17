import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const complaints = [
  {
    id: "CC-2026-001245",
    title: "Large Pothole Near Main Market",
    category: "Road Damage",
    status: "In Progress",
    priority: "High",
    date: "14 Jul 2026",
    location: "Jalandhar",
  },
  {
    id: "CC-2026-001238",
    title: "Street Light Not Working",
    category: "Street Light",
    status: "Resolved",
    priority: "Medium",
    date: "10 Jul 2026",
    location: "Ludhiana",
  },
  {
    id: "CC-2026-001226",
    title: "Garbage Not Collected",
    category: "Garbage Collection",
    status: "Pending",
    priority: "High",
    date: "08 Jul 2026",
    location: "Amritsar",
  },
];

const statusColors = {
  Pending: "bg-yellow-500/10 text-yellow-400",
  "In Progress": "bg-cyan-500/10 text-cyan-400",
  Resolved: "bg-emerald-500/10 text-emerald-400",
  Rejected: "bg-red-500/10 text-red-400",
};

const priorityColors = {
  Low: "bg-green-500/10 text-green-400",
  Medium: "bg-orange-500/10 text-orange-400",
  High: "bg-red-500/10 text-red-400",
  Critical: "bg-pink-500/10 text-pink-400",
};

export default function ComplaintHistoryCard() {
  return (
    <div className="grid gap-6 lg:hidden">
      {complaints.map((complaint, index) => (
        <motion.div
          key={complaint.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.08,
            duration: 0.35,
          }}
          whileHover={{
            y: -5,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-slate-900
            p-6
            shadow-xl
          "
        >
          {/* Header */}

          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-xl font-bold text-white">
                {complaint.title}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {complaint.id}
              </p>

            </div>

            <span
              className={`
                rounded-full
                px-3
                py-1
                text-xs
                font-semibold
                ${statusColors[complaint.status]}
              `}
            >
              {complaint.status}
            </span>

          </div>

          {/* Details */}

          <div className="mt-6 space-y-4">

            <div className="flex justify-between">

              <span className="text-slate-400">
                Category
              </span>

              <span className="font-medium text-white">
                {complaint.category}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-slate-400">
                Priority
              </span>

              <span
                className={`
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  ${priorityColors[complaint.priority]}
                `}
              >
                {complaint.priority}
              </span>

            </div>

            <div className="flex items-center gap-3 text-slate-400">

              <CalendarDays size={16} />

              {complaint.date}

            </div>

            <div className="flex items-center gap-3 text-slate-400">

              <MapPin size={16} />

              {complaint.location}

            </div>

          </div>

          {/* Actions */}

          <div className="mt-8 flex gap-3">

            <button
              className="
                flex-1
                rounded-2xl
                bg-cyan-500/10
                py-3
                text-cyan-400
                transition
                hover:bg-cyan-500
                hover:text-white
              "
            >
              <Eye className="mx-auto" size={20} />
            </button>

            <button
              className="
                flex-1
                rounded-2xl
                bg-yellow-500/10
                py-3
                text-yellow-400
                transition
                hover:bg-yellow-500
                hover:text-white
              "
            >
              <Pencil className="mx-auto" size={20} />
            </button>

            <button
              className="
                flex-1
                rounded-2xl
                bg-red-500/10
                py-3
                text-red-400
                transition
                hover:bg-red-500
                hover:text-white
              "
            >
              <Trash2 className="mx-auto" size={20} />
            </button>

          </div>

        </motion.div>
      ))}
    </div>
  );
}