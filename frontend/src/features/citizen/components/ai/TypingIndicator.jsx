import { motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex items-end gap-4"
    >
      {/* AI Avatar */}

      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-cyan-500
          to-blue-600
          shadow-lg
        "
      >
        <Bot
          size={24}
          className="text-white"
        />
      </div>

      {/* Typing Bubble */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-slate-900
          px-6
          py-5
          shadow-lg
        "
      >
        <p className="mb-4 text-sm text-slate-400">
          CitizenConnect AI is thinking...
        </p>

        <div className="flex items-center gap-2">

          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0,
            }}
            className="
              h-3
              w-3
              rounded-full
              bg-cyan-400
            "
          />

          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0.15,
            }}
            className="
              h-3
              w-3
              rounded-full
              bg-cyan-400
            "
          />

          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              h-3
              w-3
              rounded-full
              bg-cyan-400
            "
          />

        </div>
      </div>
    </motion.div>
  );
}