import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Base Background */}

      <div className="absolute inset-0 bg-[#050816]" />

      {/* Blob 1 */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-32
          w-[500px]
          h-[500px]
          rounded-full
          bg-emerald-500/20
          blur-[130px]
        "
      />

      {/* Blob 2 */}

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, -120, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          right-0
          w-[550px]
          h-[550px]
          rounded-full
          bg-green-400/15
          blur-[150px]
        "
      />

      {/* Blob 3 */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[650px]
          h-[650px]
          rounded-full
          bg-emerald-400/10
          blur-[180px]
        "
      />

      {/* Noise Overlay */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)]
          bg-[length:28px_28px]
        "
      />

      {/* Gradient Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#050816]/40
          to-[#050816]
        "
      />

    </div>
  );
}

export default AnimatedBackground;