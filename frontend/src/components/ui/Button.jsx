import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-[0_12px_40px_rgba(37,99,235,.35)] hover:shadow-[0_18px_60px_rgba(6,182,212,.45)]",

  secondary:
    "border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10",

  outline:
    "border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/10",

  danger:
    "bg-red-500 hover:bg-red-600 text-white",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  type = "button",
  leftIcon,
  rightIcon,
  className = "",
  onClick,
}) {
  return (
    <motion.button
      whileHover={
        disabled || loading
          ? {}
          : {
              y: -3,
              scale: 1.02,
            }
      }
      whileTap={
        disabled || loading
          ? {}
          : {
              scale: 0.97,
            }
      }
      transition={{
        duration: 0.2,
      }}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        focus:outline-none
        focus:ring-4
        focus:ring-cyan-500/20
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {loading ? (
        <>
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Loading...
        </>
      ) : (
        <>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </>
      )}
    </motion.button>
  );
}

export default Button;