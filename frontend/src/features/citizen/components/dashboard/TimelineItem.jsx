import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  AlertTriangle,
  ClipboardCheck,
  UserCheck,
} from "lucide-react";

const iconMap = {
  submitted: ClipboardCheck,
  assigned: UserCheck,
  progress: Clock3,
  resolved: CheckCircle2,
  urgent: AlertTriangle,
};

const colorMap = {
  submitted: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    line: "bg-blue-500",
  },
  assigned: {
    bg: "bg-violet-100",
    text: "text-violet-600",
    line: "bg-violet-500",
  },
  progress: {
    bg: "bg-amber-100",
    text: "text-amber-600",
    line: "bg-amber-500",
  },
  resolved: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    line: "bg-emerald-500",
  },
  urgent: {
    bg: "bg-red-100",
    text: "text-red-600",
    line: "bg-red-500",
  },
};

const TimelineItem = ({
  title,
  description,
  time,
  type,
  isLast = false,
}) => {
  const Icon = iconMap[type] || Clock3;
  const theme = colorMap[type] || colorMap.progress;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="relative flex gap-5"
    >
      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${theme.bg}`}
        >
          <Icon className={`h-6 w-6 ${theme.text}`} />
        </div>

        {!isLast && (
          <div
            className={`mt-2 h-full w-1 rounded-full ${theme.line}`}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h3 className="text-lg font-semibold text-slate-800">
            {title}
          </h3>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {time}
          </span>
        </div>

        <p className="mt-3 leading-7 text-slate-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;