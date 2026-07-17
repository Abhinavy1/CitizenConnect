import { motion } from "framer-motion";
import {
  BellOff,
  RefreshCw,
} from "lucide-react";

export default function EmptyNotifications() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
        border-dashed
        border-slate-700
        bg-slate-900
        px-10
        py-20
        text-center
        shadow-xl
      "
    >
      {/* Icon */}

      <div
        className="
          mx-auto
          flex
          h-32
          w-32
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-cyan-500
          to-blue-600
        "
      >
        <BellOff
          size={60}
          className="text-white"
        />
      </div>

      {/* Title */}

      <h2 className="mt-8 text-4xl font-black text-white">
        You're All Caught Up!
      </h2>

      {/* Description */}

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        There are no new notifications at the moment.
        Complaint updates, AI alerts, and important government
        announcements will appear here automatically.
      </p>

      {/* Refresh Button */}

      <button
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          px-8
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:scale-105
        "
      >
        <RefreshCw size={22} />

        Refresh Notifications
      </button>

      {/* Footer */}

      <p className="mt-8 text-sm text-slate-500">
        Notifications will automatically appear when there are
        complaint updates, officer responses, AI insights,
        or emergency announcements.
      </p>
    </motion.div>
  );
}