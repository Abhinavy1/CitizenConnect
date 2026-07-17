import { motion } from "framer-motion";

function Badge({
  children,
  variant = "default",
  size = "md",
  rounded = true,
  className = "",
}) {
  const variants = {
    default:
      "bg-slate-800 text-slate-300 border border-slate-700",

    primary:
      "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",

    success:
      "bg-green-500/15 text-green-400 border border-green-500/30",

    warning:
      "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",

    danger:
      "bg-red-500/15 text-red-400 border border-red-500/30",

    info:
      "bg-blue-500/15 text-blue-400 border border-blue-500/30",

    purple:
      "bg-purple-500/15 text-purple-400 border border-purple-500/30",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",

    md: "px-3 py-1.5 text-sm",

    lg: "px-4 py-2 text-base",
  };

  return (
    <motion.span
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        tracking-wide
        whitespace-nowrap
        ${
          rounded
            ? "rounded-full"
            : "rounded-xl"
        }
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </motion.span>
  );
}

export default Badge;