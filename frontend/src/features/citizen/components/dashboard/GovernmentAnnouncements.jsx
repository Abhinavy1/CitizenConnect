import { motion } from "framer-motion";
import {
  Megaphone,
  CalendarDays,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Smart Road Repair Initiative",
    description:
      "The Municipal Corporation has launched an AI-powered road monitoring system to improve road maintenance and reduce repair time.",
    date: "17 Jul 2026",
    category: "Infrastructure",
  },
  {
    id: 2,
    title: "Online Property Tax Portal Upgrade",
    description:
      "Citizens can now pay property tax faster with the newly upgraded online payment system.",
    date: "15 Jul 2026",
    category: "E-Governance",
  },
  {
    id: 3,
    title: "Clean City Awareness Drive",
    description:
      "Join the city-wide cleanliness campaign this weekend and help build a greener and cleaner city.",
    date: "13 Jul 2026",
    category: "Environment",
  },
];

const GovernmentAnnouncements = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-blue-100 p-3">
            <Megaphone className="h-6 w-6 text-blue-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Government Announcements
            </h2>

            <p className="text-sm text-slate-500">
              Latest updates from government departments
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Announcement Cards */}
      <div className="space-y-5">
        {announcements.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {item.category}
              </span>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays size={15} />
                {item.date}
              </div>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-slate-800">
              {item.title}
            </h3>

            <p className="mb-4 leading-6 text-slate-500">
              {item.description}
            </p>

            <button className="flex items-center gap-2 font-medium text-blue-600 transition hover:text-blue-700">
              Read More
              <ExternalLink size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default GovernmentAnnouncements;