import { motion } from "framer-motion";
import {
  Users,
  ClipboardCheck,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "Registered Citizens",
    value: "18,540",
    icon: Users,
    bg: "bg-blue-100",
    color: "text-blue-600",
    growth: "+12%",
  },
  {
    title: "Total Complaints",
    value: "4,286",
    icon: ClipboardCheck,
    bg: "bg-amber-100",
    color: "text-amber-600",
    growth: "+8%",
  },
  {
    title: "Resolved Cases",
    value: "3,912",
    icon: CheckCircle2,
    bg: "bg-emerald-100",
    color: "text-emerald-600",
    growth: "+18%",
  },
  {
    title: "Pending Cases",
    value: "374",
    icon: Clock3,
    bg: "bg-red-100",
    color: "text-red-600",
    growth: "-6%",
  },
];

const CitizenStats = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Citizen Statistics
        </h2>

        <p className="text-sm text-slate-500">
          Real-time overview of CitizenConnect platform performance
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.title}
              whileHover={{
                y: -6,
              }}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg}`}
                >
                  <Icon className={`h-7 w-7 ${stat.color}`} />
                </div>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600">
                  {stat.growth}
                </span>
              </div>

              <h3 className="text-sm font-medium text-slate-500">
                {stat.title}
              </h3>

              <p className="mt-2 text-3xl font-bold text-slate-800">
                {stat.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default CitizenStats;