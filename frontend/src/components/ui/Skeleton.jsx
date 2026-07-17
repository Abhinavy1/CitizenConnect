import { motion } from "framer-motion";

function Skeleton({
  width = "100%",
  height = 20,
  rounded = "xl",
  className = "",
}) {
  return (
    <motion.div
      animate={{
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      }}
      style={{
        width,
        height,
      }}
      className={`
        bg-slate-800
        rounded-${rounded}
        ${className}
      `}
    />
  );
}

export default Skeleton;