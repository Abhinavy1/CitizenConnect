import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  TrendingUp,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Today's Complaints",
    value: 12,
    icon: Activity,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Resolved Today",
    value: 9,
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    title: "Pending Review",
    value: 5,
    icon: Clock3,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
  {
    title: "High Priority",
    value: 2,
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    title: "Response Rate",
    value: "96%",
    icon: TrendingUp,
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    title: "Citizens Helped",
    value: "1.2K",
    icon: Users,
    color: "text-cyan-600",
    bg: "bg-cyan-100",
  },
];

const DashboardStats = () => {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
            }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-lg"
          >
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
            >
              <Icon className={`h-6 w-6 ${item.color}`} />
            </div>

            <h3 className="text-3xl font-bold text-slate-800">
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {item.title}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
};

export default DashboardStats;