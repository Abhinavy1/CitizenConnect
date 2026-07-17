import { motion } from "framer-motion";
import {
  FilePlus2,
  UserCheck,
  MapPinned,
  RefreshCw,
  CheckCircle2,
  Bot,
} from "lucide-react";

const timeline = [
  {
    id: 1,
    title: "Complaint Submitted",
    description:
      "Road damage complaint submitted successfully.",
    date: "14 Jul 2026 • 09:10 AM",
    icon: FilePlus2,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Officer Assigned",
    description:
      "Municipal Corporation assigned an officer.",
    date: "14 Jul 2026 • 11:45 AM",
    icon: UserCheck,
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 3,
    title: "Site Inspection",
    description:
      "Field inspection completed successfully.",
    date: "15 Jul 2026 • 09:30 AM",
    icon: MapPinned,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    title: "Status Updated",
    description:
      "Complaint status changed to In Progress.",
    date: "15 Jul 2026 • 12:15 PM",
    icon: RefreshCw,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 5,
    title: "AI Recommendation",
    description:
      "CitizenConnect AI estimated a 2-day resolution time.",
    date: "15 Jul 2026 • 02:30 PM",
    icon: Bot,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 6,
    title: "Complaint Resolved",
    description:
      "Road repair completed by Municipal Corporation.",
    date: "16 Jul 2026 • 10:20 AM",
    icon: CheckCircle2,
    color: "from-emerald-500 to-teal-600",
  },
];

export default function ActivityTimeline() {
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

      <div className="mb-10">

        <h2 className="text-3xl font-black text-white">
          Activity Timeline
        </h2>

        <p className="mt-2 text-slate-400">
          Your recent complaint activities and updates.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative">

        <div
          className="
            absolute
            left-7
            top-0
            h-full
            w-0.5
            bg-slate-700
          "
        />

        <div className="space-y-8">

          {timeline.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="relative flex gap-6"
              >

                {/* Icon */}

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    ${item.color}
                    shadow-lg
                  `}
                >
                  <Icon
                    size={24}
                    className="text-white"
                  />
                </div>

                {/* Content */}

                <div
                  className="
                    flex-1
                    rounded-2xl
                    bg-slate-950
                    p-6
                  "
                >

                  <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <span className="text-sm text-slate-500">
                      {item.date}
                    </span>

                  </div>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </motion.div>
  );
}