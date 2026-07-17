import { motion } from "framer-motion";
import {
  Bell,
  Bot,
  ShieldAlert,
  CheckCircle2,
  Clock3,
  Trash2,
  Check,
} from "lucide-react";

const iconMap = {
  complaint: Bell,
  ai: Bot,
  emergency: ShieldAlert,
  resolved: CheckCircle2,
};

const iconColor = {
  complaint: "from-cyan-500 to-blue-600",
  ai: "from-violet-500 to-purple-600",
  emergency: "from-red-500 to-pink-600",
  resolved: "from-emerald-500 to-green-600",
};

export default function NotificationCard({
  notification,
}) {
  const Icon = iconMap[notification.type] || Bell;

  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-6
        shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex gap-5">

          <div
            className={`
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              ${iconColor[notification.type]}
            `}
          >
            <Icon
              size={28}
              className="text-white"
            />
          </div>

          <div>

            <h3 className="text-xl font-bold text-white">
              {notification.title}
            </h3>

            <p className="mt-2 leading-7 text-slate-400">
              {notification.message}
            </p>

          </div>

        </div>

        {!notification.read && (

          <span
            className="
              rounded-full
              bg-cyan-500/10
              px-3
              py-1
              text-xs
              font-semibold
              text-cyan-400
            "
          >
            NEW
          </span>

        )}

      </div>

      {/* Footer */}

      <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-3 text-slate-400">

          <Clock3 size={18} />

          <span>{notification.time}</span>

        </div>

        <div className="flex gap-3">

          <button
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-slate-800
              px-5
              py-3
              text-white
              transition
              hover:border-cyan-500
            "
          >
            <Check size={18} />

            Mark Read

          </button>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-red-500/20
              bg-red-500/10
              px-5
              py-3
              text-red-400
              transition
              hover:bg-red-500
              hover:text-white
            "
          >
            <Trash2 size={18} />

            Delete

          </button>

        </div>

      </div>

    </motion.div>
  );
}