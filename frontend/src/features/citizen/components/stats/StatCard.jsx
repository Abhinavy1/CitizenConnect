import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
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
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">

            {title}

          </p>

          <h2 className="mt-3 text-4xl font-black">

            {value}

          </h2>

          <p className="mt-3 text-sm font-medium text-emerald-400">

            {change}

          </p>

        </div>

        <div
          className={`
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            ${color}
          `}
        >
          <Icon size={28} />
        </div>

      </div>

    </motion.div>
  );
}