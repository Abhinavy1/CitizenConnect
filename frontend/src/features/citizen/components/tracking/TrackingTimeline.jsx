import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  Clock3,
} from "lucide-react";

const timeline = [
  {
    id: 1,
    title: "Complaint Submitted",
    description: "Your complaint has been successfully submitted.",
    date: "14 Jul 2026 • 09:10 AM",
    status: "completed",
  },
  {
    id: 2,
    title: "AI Analysis Completed",
    description: "CitizenConnect AI analyzed and categorized your complaint.",
    date: "14 Jul 2026 • 09:11 AM",
    status: "completed",
  },
  {
    id: 3,
    title: "Assigned to Department",
    description: "Municipal Corporation received your complaint.",
    date: "14 Jul 2026 • 09:15 AM",
    status: "completed",
  },
  {
    id: 4,
    title: "Officer Assigned",
    description: "An officer has been assigned to inspect the issue.",
    date: "14 Jul 2026 • 10:00 AM",
    status: "current",
  },
  {
    id: 5,
    title: "Site Inspection",
    description: "Inspection is scheduled.",
    date: "Pending",
    status: "pending",
  },
  {
    id: 6,
    title: "Complaint Resolved",
    description: "Issue resolved and waiting for citizen confirmation.",
    date: "Pending",
    status: "pending",
  },
];

export default function TrackingTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
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
          Complaint Timeline
        </h2>

        <p className="mt-2 text-slate-400">
          Track every stage of your complaint.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative">

        {timeline.map((item, index) => (

          <div
            key={item.id}
            className="relative flex gap-6 pb-10"
          >

            {/* Vertical Line */}

            {index !== timeline.length - 1 && (
              <div
                className="
                  absolute
                  left-[17px]
                  top-10
                  h-full
                  w-[2px]
                  bg-slate-700
                "
              />
            )}

            {/* Icon */}

            <div className="relative z-10">

              {item.status === "completed" && (
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-500
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="text-white"
                  />
                </div>
              )}

              {item.status === "current" && (
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-500
                    animate-pulse
                  "
                >
                  <Clock3
                    size={18}
                    className="text-white"
                  />
                </div>
              )}

              {item.status === "pending" && (
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-slate-600
                    bg-slate-900
                  "
                >
                  <Circle
                    size={16}
                    className="text-slate-500"
                  />
                </div>
              )}

            </div>

            {/* Content */}

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="
                flex-1
                rounded-2xl
                border
                border-white/10
                bg-slate-950
                p-6
                transition
                hover:border-cyan-500
              "
            >

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {item.description}
                  </p>

                </div>

                <span
                  className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    w-fit

                    ${
                      item.status === "completed"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : item.status === "current"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-slate-800 text-slate-400"
                    }
                  `}
                >
                  {item.status.charAt(0).toUpperCase() +
                    item.status.slice(1)}
                </span>

              </div>

              <p className="mt-5 text-sm text-slate-500">
                {item.date}
              </p>

            </motion.div>

          </div>

        ))}

      </div>
    </motion.div>
  );
}