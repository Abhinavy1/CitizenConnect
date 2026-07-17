import { motion } from "framer-motion";
import {
  CircleDashed,
  Clock3,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

export default function ComplaintStatus() {
  // Mock data
  // Replace with API later

  const status = {
    current: "In Progress",
    progress: 65,
    priority: "High",
    eta: "2 Days",
    confidence: 96,
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-8
        shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
          "
        >
          <CircleDashed
            size={30}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Complaint Status
          </h2>

          <p className="text-slate-400">
            Live progress of your complaint
          </p>

        </div>

      </div>

      {/* Status */}

      <div className="mt-8">

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Current Status
          </span>

          <span className="rounded-full bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-400">
            {status.current}
          </span>

        </div>

        <div className="mt-6 h-4 rounded-full bg-slate-800">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${status.progress}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
            "
          />

        </div>

        <div className="mt-3 text-right text-cyan-400 font-bold">

          {status.progress}% Complete

        </div>

      </div>

      {/* Stats */}

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        {/* ETA */}

        <div className="rounded-2xl bg-slate-950 p-5">

          <div className="flex items-center gap-3">

            <Clock3
              size={20}
              className="text-cyan-400"
            />

            <span className="text-slate-400">
              ETA
            </span>

          </div>

          <h3 className="mt-3 text-2xl font-bold text-white">
            {status.eta}
          </h3>

        </div>

        {/* Priority */}

        <div className="rounded-2xl bg-slate-950 p-5">

          <div className="flex items-center gap-3">

            <ShieldAlert
              size={20}
              className="text-red-400"
            />

            <span className="text-slate-400">
              Priority
            </span>

          </div>

          <h3 className="mt-3 text-2xl font-bold text-red-400">
            {status.priority}
          </h3>

        </div>

        {/* AI */}

        <div className="rounded-2xl bg-slate-950 p-5">

          <div className="flex items-center gap-3">

            <Sparkles
              size={20}
              className="text-emerald-400"
            />

            <span className="text-slate-400">
              AI Confidence
            </span>

          </div>

          <h3 className="mt-3 text-2xl font-bold text-emerald-400">
            {status.confidence}%
          </h3>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

        <p className="text-slate-300">

          🤖 AI predicts that your complaint is progressing
          normally and is expected to be resolved within
          the estimated time.

        </p>

      </div>

    </motion.div>
  );
}