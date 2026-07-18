import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const AnalyticsCard = ({
  title,
  value,
  icon: Icon,
  color = "emerald",
  change = "+0%",
  positive = true,
  subtitle,
}) => {
  const colors = {
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-600",
      border: "border-emerald-200",
      shadow: "hover:shadow-emerald-200/50",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
      shadow: "hover:shadow-blue-200/50",
    },
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-600",
      border: "border-amber-200",
      shadow: "hover:shadow-amber-200/50",
    },
    rose: {
      bg: "bg-rose-100",
      text: "text-rose-600",
      border: "border-rose-200",
      shadow: "hover:shadow-rose-200/50",
    },
    violet: {
      bg: "bg-violet-100",
      text: "text-violet-600",
      border: "border-violet-200",
      shadow: "hover:shadow-violet-200/50",
    },
    cyan: {
      bg: "bg-cyan-100",
      text: "text-cyan-600",
      border: "border-cyan-200",
      shadow: "hover:shadow-cyan-200/50",
    },
  };

  const theme = colors[color] || colors.emerald;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className={`rounded-3xl border ${theme.border} bg-white p-6 shadow-lg transition-all ${theme.shadow}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-800">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.bg}`}
        >
          <Icon className={`h-7 w-7 ${theme.text}`} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
            positive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {positive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {change}
        </div>

        <span className="text-xs text-slate-400">
          Since last month
        </span>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: positive ? "78%" : "42%",
          }}
          transition={{
            duration: 1,
          }}
          className={`h-full rounded-full ${
            positive
              ? "bg-gradient-to-r from-emerald-500 to-green-400"
              : "bg-gradient-to-r from-rose-500 to-red-400"
          }`}
        />
      </div>
    </motion.div>
  );
};

export default AnalyticsCard;