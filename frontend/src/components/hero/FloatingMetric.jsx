import { motion } from "framer-motion";

export default function FloatingMetric({
  title,
  value,
  icon,
  color = "from-cyan-500 to-blue-600",
  className = "",
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      }}
      className={`
        flex
        items-center
        gap-4
        rounded-3xl
        border
        border-white/10
        bg-slate-900/70
        backdrop-blur-2xl
        px-5
        py-4
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
        ${className}
      `}
    >
      <div
        className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${color}
        flex items-center justify-center text-white shadow-lg`}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-wider text-slate-400">
          {title}
        </p>

        <h3 className="mt-1 text-2xl font-black text-white">
          {value}
        </h3>
      </div>
    </motion.div>
  );
}