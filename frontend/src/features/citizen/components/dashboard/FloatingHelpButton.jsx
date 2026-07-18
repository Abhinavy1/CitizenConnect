import { motion } from "framer-motion";
import {
  MessageCircle,
  Sparkles,
} from "lucide-react";

const FloatingHelpButton = () => {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      {/* Pulse Animation */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1.4],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-emerald-500"
      />

      {/* Main Button */}
      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl"
      >
        <MessageCircle className="h-7 w-7" />
      </motion.button>

      {/* AI Badge */}
      <motion.div
        animate={{
          y: [-3, 3, -3],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 shadow-lg"
      >
        <Sparkles className="h-4 w-4 text-slate-900" />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        whileHover={{
          opacity: 1,
          x: -10,
        }}
        className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-xl"
      >
        Need Help? Ask AI Assistant
      </motion.div>
    </motion.div>
  );
};

export default FloatingHelpButton;