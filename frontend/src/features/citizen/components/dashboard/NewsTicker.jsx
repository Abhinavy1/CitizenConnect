import { motion } from "framer-motion";
import {
  Newspaper,
  ArrowRight,
  Clock3,
} from "lucide-react";

const news = [
  {
    id: 1,
    title:
      "AI-powered road inspection project launched across the city.",
    time: "15 min ago",
    category: "Infrastructure",
  },
  {
    id: 2,
    title:
      "Smart water supply monitoring system reduces complaints by 22%.",
    time: "1 hour ago",
    category: "Utilities",
  },
  {
    id: 3,
    title:
      "CitizenConnect reaches 95% complaint resolution milestone.",
    time: "3 hours ago",
    category: "Citizen Services",
  },
  {
    id: 4,
    title:
      "New government sanitation campaign starts this weekend.",
    time: "Today",
    category: "Environment",
  },
  {
    id: 5,
    title:
      "Traffic department introduces AI-based signal monitoring.",
    time: "Today",
    category: "Traffic",
  },
];

const NewsTicker = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-blue-100 p-3">
            <Newspaper className="h-6 w-6 text-blue-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Latest Government News
            </h2>

            <p className="text-sm text-slate-500">
              Stay updated with recent announcements
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* News List */}
      <div className="space-y-4">
        {news.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 6 }}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-md md:flex-row md:items-center md:justify-between"
          >
            <div className="flex-1">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {item.category}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-slate-800">
                {item.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Clock3 className="h-4 w-4" />
              {item.time}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default NewsTicker;