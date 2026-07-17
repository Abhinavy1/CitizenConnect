import { motion } from "framer-motion";

const blurVariants = {
  none: "backdrop-blur-none",
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
  "2xl": "backdrop-blur-2xl",
};

function GlassCard({
  children,
  className = "",
  hover = true,
  blur = "xl",
  padding = "p-8",
  onClick,
}) {
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
        ease: "easeOut",
      }}
      onClick={onClick}
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.05]
        ${blurVariants[blur]}
        ${padding}
        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        transition-all
        duration-300
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Aurora Glow Top Right */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* Blue Glow Bottom Left */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          -left-20
          h-64
          w-64
          rounded-full
          bg-blue-600/15
          blur-3xl
        "
      />

      {/* Glass Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-white/[0.02]
          pointer-events-none
        "
      />

      {/* Top Highlight */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/60
          to-transparent
        "
      />

      {/* Left Highlight */}
      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-px
          bg-gradient-to-b
          from-cyan-400/40
          via-transparent
          to-transparent
        "
      />

      {/* Noise Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]
          bg-[length:20px_20px]
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default GlassCard;