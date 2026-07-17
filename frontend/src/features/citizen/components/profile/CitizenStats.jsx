import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  Clock3,
  Star,
  Trophy,
  Timer,
} from "lucide-react";

const stats = [
  {
    title: "Total Complaints",
    value: "42",
    icon: FileText,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Resolved",
    value: "31",
    icon: CheckCircle2,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Pending",
    value: "8",
    icon: Clock3,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Citizen Rating",
    value: "4.9",
    icon: Star,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Resolution Rate",
    value: "93%",
    icon: Trophy,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Avg Resolution",
    value: "2.4 Days",
    icon: Timer,
    color: "from-pink-500 to-rose-600",
  },
];

export default function CitizenStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
            {/* Icon */}

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

            {/* Title */}

            <p className="mt-6 text-slate-400">
              {item.title}
            </p>

            {/* Value */}

            <h2 className="mt-3 text-4xl font-black text-white">
              {item.value}
            </h2>

            {/* Progress */}

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "85%",
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                }}
                className={`
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  ${item.color}
                `}
              />

            </div>

          </motion.div>
        );
      })}
    </div>
  );
}