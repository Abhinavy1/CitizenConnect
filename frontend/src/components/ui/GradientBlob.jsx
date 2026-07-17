import { motion } from "framer-motion";

function GradientBlob({
  className = "",
  size = 420,
  color = "emerald",
}) {
  const colors = {
    emerald: "bg-emerald-500/20",
    blue: "bg-blue-500/20",
    purple: "bg-purple-500/20",
    cyan: "bg-cyan-500/20",
    orange: "bg-orange-500/20",
  };

  return (
    <motion.div
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -40, 30, 0],
        scale: [1, 1.15, 0.95, 1],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
      }}
      className={`
        absolute
        rounded-full
        blur-[140px]
        pointer-events-none
        ${colors[color]}
        ${className}
      `}
    />
  );
}

export default GradientBlob;