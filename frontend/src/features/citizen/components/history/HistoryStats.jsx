import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  Timer,
} from "lucide-react";

const stats = [
  {
    title: "Total Complaints",
    value: "42",
    icon: FileText,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Resolved",
    value: "31",
    icon: CheckCircle2,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Pending",
    value: "8",
    icon: Clock3,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "High Priority",
    value: "3",
    icon: AlertTriangle,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Avg Resolution",
    value: "2.4 Days",
    icon: Timer,
    color: "from-violet-500 to-purple-600",
  },
];

export default function HistoryStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.35,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900
              p-6
              shadow-xl
              transition-all
            "
          >
            <div
              className={`
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                ${item.color}
              `}
            >
              <Icon
                size={30}
                className="text-white"
              />
            </div>

            <h3 className="mt-6 text-slate-400">
              {item.title}
            </h3>

            <p className="mt-3 text-4xl font-black text-white">
              {item.value}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}