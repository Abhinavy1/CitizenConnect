import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, TrendingDown } from "lucide-react";

function StatCard({
  title,
  value = 0,
  suffix = "",
  prefix = "",
  icon,
  trend,
  trendLabel,
  color = "emerald",
  className = "",
}) {
  const colors = {
    emerald: {
      icon: "bg-emerald-500/15 text-emerald-400",
      ring: "hover:border-emerald-500/40",
    },
    blue: {
      icon: "bg-blue-500/15 text-blue-400",
      ring: "hover:border-blue-500/40",
    },
    orange: {
      icon: "bg-orange-500/15 text-orange-400",
      ring: "hover:border-orange-500/40",
    },
    red: {
      icon: "bg-red-500/15 text-red-400",
      ring: "hover:border-red-500/40",
    },
    purple: {
      icon: "bg-purple-500/15 text-purple-400",
      ring: "hover:border-purple-500/40",
    },
  };

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        backdrop-blur-xl
        p-7
        shadow-xl
        transition-all
        duration-300
        ${colors[color].ring}
        ${className}
      `}
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-black text-white">

            {prefix}

            <CountUp
              end={value}
              duration={2.5}
            />

            {suffix}

          </h2>

          {trend !== undefined && (
            <div className="flex items-center gap-2 mt-4">

              {trend >= 0 ? (
                <TrendingUp
                  size={18}
                  className="text-emerald-400"
                />
              ) : (
                <TrendingDown
                  size={18}
                  className="text-red-400"
                />
              )}

              <span
                className={
                  trend >= 0
                    ? "text-emerald-400 text-sm font-medium"
                    : "text-red-400 text-sm font-medium"
                }
              >
                {Math.abs(trend)}%
              </span>

              {trendLabel && (
                <span className="text-slate-500 text-sm">
                  {trendLabel}
                </span>
              )}

            </div>
          )}

        </div>

        {icon && (
          <div
            className={`
              w-16
              h-16
              rounded-2xl
              flex
              items-center
              justify-center
              ${colors[color].icon}
            `}
          >
            {icon}
          </div>
        )}

      </div>
    </motion.div>
  );
}

export default StatCard;