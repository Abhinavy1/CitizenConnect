import { motion } from "framer-motion";
import { ArrowRight, ClipboardList } from "lucide-react";
import RecentComplaintCard from "./RecentComplaintCard";

const complaints = [
  {
    id: "CC-10231",
    title: "Potholes on Main Road",
    description:
      "Multiple potholes causing heavy traffic congestion and increasing the risk of accidents during peak hours.",
    status: "Pending",
    priority: "High",
    date: "17 Jul 2026",
    time: "09:30 AM",
    location: "Sector 21, Chandigarh",
  },
  {
    id: "CC-10232",
    title: "Street Light Not Working",
    description:
      "Street lights have been non-functional for several days, creating safety concerns during nighttime.",
    status: "In Progress",
    priority: "Medium",
    date: "16 Jul 2026",
    time: "06:15 PM",
    location: "Model Town",
  },
  {
    id: "CC-10233",
    title: "Garbage Collection Delay",
    description:
      "Waste has not been collected for the past three days, resulting in unpleasant conditions for residents.",
    status: "Resolved",
    priority: "Low",
    date: "15 Jul 2026",
    time: "11:10 AM",
    location: "Civil Lines",
  },
];

const RecentComplaints = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-100 p-3">
            <ClipboardList className="h-6 w-6 text-emerald-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Recent Complaints
            </h2>

            <p className="text-sm text-slate-500">
              Latest complaints submitted by citizens
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700">
          View All
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Complaint List */}
      <div className="space-y-5">
        {complaints.map((complaint) => (
          <RecentComplaintCard
            key={complaint.id}
            complaint={complaint}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default RecentComplaints;