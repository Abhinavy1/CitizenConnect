import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  Star,
  Medal,
  ShieldCheck,
} from "lucide-react";

const iconMap = {
  Award,
  Trophy,
  Star,
  Medal,
  ShieldCheck,
};

const colorMap = {
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  amber: {
    bg: "bg-amber-100",
    text: "text-amber-600",
  },
  violet: {
    bg: "bg-violet-100",
    text: "text-violet-600",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
  },
};

const AchievementCard = ({ achievement }) => {
  const Icon = iconMap[achievement.icon] || Award;

  const theme =
    colorMap[achievement.color] || colorMap.emerald;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
    >
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg}`}
      >
        <Icon className={`h-8 w-8 ${theme.text}`} />
      </div>

      <h3 className="mb-2 text-xl font-bold text-slate-800">
        {achievement.title}
      </h3>

      <p className="mb-5 text-sm leading-6 text-slate-500">
        {achievement.description}
      </p>

      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${theme.bg} ${theme.text}`}
        >
          {achievement.level}
        </span>

        <span className="text-sm font-medium text-slate-400">
          {achievement.date}
        </span>
      </div>
    </motion.div>
  );
};

export default AchievementCard;