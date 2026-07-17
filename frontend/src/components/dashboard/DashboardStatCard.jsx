import { motion } from "framer-motion";

export default function DashboardStatCard({
  title,
  value,
  change,
  color,
  icon,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-slate-900/80
      backdrop-blur-xl
      p-6
      shadow-xl
    "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h2 className="mt-3 text-4xl font-black text-white">
            {value}
          </h2>

          <p className={`mt-3 text-sm ${color}`}>{change}</p>
        </div>

        <div
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-slate-800
        "
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
}