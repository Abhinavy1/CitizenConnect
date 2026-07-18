import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  neutral: Minus,
};

const trendColors = {
  up: "text-emerald-600 bg-emerald-100",
  down: "text-red-600 bg-red-100",
  neutral: "text-slate-600 bg-slate-100",
};

const progressColors = {
  emerald: "bg-emerald-500",
  blue: "bg-blue-500",
  amber: "bg-amber-500",
  red: "bg-red-500",
  violet: "bg-violet-500",
};

const PerformanceCard = ({
  title,
  value,
  target,
  progress,
  trend = "up",
  change = "+0%",
  color = "emerald",
}) => {
  const TrendIcon = trendIcons[trend];

  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Target: {target}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            trendColors[trend]
          }`}
        >
          <TrendIcon className="h-5 w-5" />
        </div>
      </div>

      {/* Value */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-slate-900">
          {value}
        </h2>

        <p
          className={`mt-2 text-sm font-semibold ${
            trend === "up"
              ? "text-emerald-600"
              : trend === "down"
              ? "text-red-600"
              : "text-slate-500"
          }`}
        >
          {change} this month
        </p>
      </div>

      {/* Progress */}
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-500">
          Progress
        </span>

        <span className="font-semibold text-slate-700">
          {progress}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1,
          }}
          className={`h-full rounded-full ${
            progressColors[color]
          }`}
        />
      </div>
    </motion.div>
  );
};

export default PerformanceCard;