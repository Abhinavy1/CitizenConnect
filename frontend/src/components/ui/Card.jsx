import { motion } from "framer-motion";

function Card({
  children,
  title,
  subtitle,
  footer,
  icon,
  hover = true,
  padding = "md",
  className = "",
  onClick,
}) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : {}
      }
      transition={{
        duration: 0.25,
      }}
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-slate-900/70
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        ${paddings[padding]}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

      {(title || subtitle || icon) && (
        <div className="flex items-start gap-4 mb-6 relative z-10">

          {icon && (
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              {icon}
            </div>
          )}

          <div>

            {title && (
              <h3 className="text-2xl font-bold text-white">
                {title}
              </h3>
            )}

            {subtitle && (
              <p className="mt-1 text-slate-400">
                {subtitle}
              </p>
            )}

          </div>

        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>

      {footer && (
        <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
          {footer}
        </div>
      )}
    </motion.div>
  );
}

export default Card;