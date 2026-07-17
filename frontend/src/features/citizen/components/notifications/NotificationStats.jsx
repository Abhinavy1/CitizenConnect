import { motion } from "framer-motion";
import {
  Bell,
  MailOpen,
  Bot,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Total Notifications",
    value: "128",
    icon: Bell,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Unread",
    value: "14",
    icon: MailOpen,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "AI Alerts",
    value: "9",
    icon: Bot,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "High Priority",
    value: "3",
    icon: AlertTriangle,
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Resolved Updates",
    value: "102",
    icon: CheckCircle2,
    color: "from-emerald-500 to-green-600",
  },
];

export default function NotificationStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.35,
            }}
            whileHover={{
              y: -6,
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
            <div
              className={`
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                ${item.color}
              `}
            >
              <Icon
                size={30}
                className="text-white"
              />
            </div>

            <p className="mt-6 text-slate-400">
              {item.title}
            </p>

            <h2 className="mt-3 text-4xl font-black text-white">
              {item.value}
            </h2>
          </motion.div>
        );
      })}
    </div>
  );
}