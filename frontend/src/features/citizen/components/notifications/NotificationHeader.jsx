import { motion } from "framer-motion";
import {
  Bell,
  CheckCheck,
  Trash2,
} from "lucide-react";

export default function NotificationHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-r
        from-slate-900
        via-slate-900
        to-cyan-950/40
        p-8
        shadow-xl
      "
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-center gap-5">

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
            <Bell
              size={32}
              className="text-white"
            />
          </div>

          <div>

            <h1 className="text-4xl font-black text-white">
              Notifications
            </h1>

            <p className="mt-2 text-slate-400">
              Stay updated with complaint progress and important alerts.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-4">

          <button
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-slate-900
              px-6
              py-4
              text-white
              transition
              hover:border-cyan-500
            "
          >
            <CheckCheck size={20} />

            Mark All Read

          </button>

          <button
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-red-500/20
              bg-red-500/10
              px-6
              py-4
              text-red-400
              transition
              hover:bg-red-500
              hover:text-white
            "
          >
            <Trash2 size={20} />

            Clear All

          </button>

        </div>

      </div>
    </motion.div>
  );
}