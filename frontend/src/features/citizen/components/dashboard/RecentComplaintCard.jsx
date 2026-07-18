import { motion } from "framer-motion";
import {
  Calendar,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

const statusColors = {
  Resolved:
    "bg-green-100 text-green-700 border-green-200",
  Pending:
    "bg-amber-100 text-amber-700 border-amber-200",
  "In Progress":
    "bg-blue-100 text-blue-700 border-blue-200",
  Rejected:
    "bg-red-100 text-red-700 border-red-200",
};

const priorityColors = {
  High: "text-red-600",
  Medium: "text-amber-600",
  Low: "text-green-600",
};

const RecentComplaintCard = ({ complaint }) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-emerald-300 hover:shadow-lg"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-bold text-slate-800">
              {complaint.title}
            </h3>

            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                statusColors[complaint.status]
              }`}
            >
              {complaint.status}
            </span>
          </div>

          <p className="mb-4 text-sm leading-6 text-slate-500">
            {complaint.description}
          </p>

          <div className="flex flex-wrap gap-5 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {complaint.date}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              {complaint.time}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {complaint.location}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div
            className={`text-sm font-semibold ${
              priorityColors[complaint.priority]
            }`}
          >
            {complaint.priority} Priority
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-700">
            View Details
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentComplaintCard;