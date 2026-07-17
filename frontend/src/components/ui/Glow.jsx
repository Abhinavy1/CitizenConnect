import { motion } from "framer-motion";

function Glow({
  color = "emerald",
  size = 300,
  className = "",
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
        scale: [1, 1.15, 1],
        opacity: [0.5, 0.9, 0.5],
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
      }}
      className={`
        absolute
        rounded-full
        blur-[120px]
        pointer-events-none
        ${colors[color]}
        ${className}
      `}
    />
  );
}

export default Glow;