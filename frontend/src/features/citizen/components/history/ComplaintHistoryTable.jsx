import { motion } from "framer-motion";
import {
  Eye,
  Pencil,
  Trash2,
  CalendarDays,
  MapPin,
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
  {
    id: "CC-2026-001201",
    title: "Water Supply Issue",
    category: "Water Supply",
    status: "Resolved",
    priority: "Low",
    date: "04 Jul 2026",
    location: "Patiala",
  },
  {
    id: "CC-2026-001188",
    title: "Government Hospital Cleanliness",
    category: "Government Hospital",
    status: "Rejected",
    priority: "Medium",
    date: "01 Jul 2026",
    location: "Bathinda",
  },
];

const statusColor = {
  Pending: "bg-yellow-500/10 text-yellow-400",
  "In Progress": "bg-cyan-500/10 text-cyan-400",
  Resolved: "bg-emerald-500/10 text-emerald-400",
  Rejected: "bg-red-500/10 text-red-400",
};

const priorityColor = {
  Low: "bg-green-500/10 text-green-400",
  Medium: "bg-orange-500/10 text-orange-400",
  High: "bg-red-500/10 text-red-400",
  Critical: "bg-pink-500/10 text-pink-400",
};

export default function ComplaintHistoryTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        shadow-xl
      "
    >
      {/* Header */}

      <div className="border-b border-white/10 p-6">

        <h2 className="text-2xl font-bold text-white">
          Complaint History
        </h2>

        <p className="mt-2 text-slate-400">
          All complaints submitted by the citizen.
        </p>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-950">

            <tr>

              <th className="px-6 py-5 text-left text-sm font-semibold text-slate-400">
                Complaint
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold text-slate-400">
                Category
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold text-slate-400">
                Status
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold text-slate-400">
                Priority
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold text-slate-400">
                Date
              </th>

              <th className="px-6 py-5 text-left text-sm font-semibold text-slate-400">
                Location
              </th>

              <th className="px-6 py-5 text-center text-sm font-semibold text-slate-400">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {complaints.map((item) => (

              <tr
                key={item.id}
                className="
                  border-t
                  border-white/5
                  transition
                  hover:bg-slate-800
                "
              >

                <td className="px-6 py-5">

                  <p className="font-semibold text-white">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.id}
                  </p>

                </td>

                <td className="px-6 py-5 text-slate-300">
                  {item.category}
                </td>

                <td className="px-6 py-5">

                  <span
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      ${statusColor[item.status]}
                    `}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      ${priorityColor[item.priority]}
                    `}
                  >
                    {item.priority}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2 text-slate-400">

                    <CalendarDays size={16} />

                    {item.date}

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-2 text-slate-400">

                    <MapPin size={16} />

                    {item.location}

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center gap-3">

                    <button className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400 transition hover:bg-cyan-500 hover:text-white">
                      <Eye size={18} />
                    </button>

                    <button className="rounded-xl bg-yellow-500/10 p-3 text-yellow-400 transition hover:bg-yellow-500 hover:text-white">
                      <Pencil size={18} />
                    </button>

                    <button className="rounded-xl bg-red-500/10 p-3 text-red-400 transition hover:bg-red-500 hover:text-white">
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </motion.div>
  );
}