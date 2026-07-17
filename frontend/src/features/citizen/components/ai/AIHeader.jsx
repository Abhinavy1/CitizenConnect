import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export default function AIHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-r
        from-slate-900
        via-slate-900
        to-cyan-950
        p-8
        shadow-xl
      "
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-cyan-500
              via-blue-500
              to-violet-600
              shadow-xl
            "
          >
            <Bot size={42} className="text-white" />
          </div>

          <div>
            <h1 className="text-4xl font-black text-white">
              CitizenConnect AI Assistant
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400 leading-7">
              Ask questions, generate complaints, explore government
              services, receive AI-powered recommendations, and get
              instant assistance 24×7.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Smart AI */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/70
              p-5
              text-center
            "
          >
            <Sparkles
              size={28}
              className="mx-auto text-cyan-400"
            />

            <h3 className="mt-3 font-bold text-white">
              Smart AI
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Complaint Analysis
            </p>
          </div>

          {/* Secure */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/70
              p-5
              text-center
            "
          >
            <ShieldCheck
              size={28}
              className="mx-auto text-emerald-400"
            />

            <h3 className="mt-3 font-bold text-white">
              Secure
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Private Conversations
            </p>
          </div>

          {/* Gemini Ready */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/70
              p-5
              text-center
            "
          >
            <Cpu
              size={28}
              className="mx-auto text-violet-400"
            />

            <h3 className="mt-3 font-bold text-white">
              Gemini Ready
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              AI Powered
            </p>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-cyan-500/20
          bg-cyan-500/10
          p-5
        "
      >
        <p className="leading-7 text-slate-300">
          🤖{" "}
          <span className="font-semibold text-white">
            CitizenConnect AI
          </span>{" "}
          can help you draft complaints, identify the correct department,
          explain government schemes, answer civic questions, summarize
          uploaded documents, and provide step-by-step guidance for public
          services.
        </p>
      </div>
    </motion.div>
  );
}