import { Link } from "react-router-dom";
import {
  FilePlus2,
  Search,
  Bot,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const actions = [
  {
    title: "New Complaint",
    description:
      "Submit a new complaint using our AI-powered complaint wizard.",
    icon: FilePlus2,
    color: "from-cyan-500 to-blue-600",
    link: "/dashboard/new-complaint",
  },
  {
    title: "Track Complaint",
    description:
      "Track the status and progress of your submitted complaints.",
    icon: Search,
    color: "from-violet-500 to-indigo-600",
    link: "/dashboard/track",
  },
  {
    title: "AI Assistant",
    description:
      "Get AI-powered guidance for government services and complaints.",
    icon: Bot,
    color: "from-emerald-500 to-green-600",
    link: "/dashboard/ai-assistant",
  },
];

export default function QuickActions() {
  return (
    <section className="mt-8">
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-3xl font-black text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-slate-400">
          Quickly access the most frequently used features.
        </p>
      </div>

      {/* Cards */}

      <div className="grid gap-6 lg:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.title}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                to={action.link}
                className="
                  group
                  block
                  h-full
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-slate-900
                  p-8
                  shadow-xl
                  transition-all
                  duration-300
                  hover:border-cyan-500
                  hover:bg-slate-800
                "
              >
                {/* Icon */}

                <div
                  className={`
                    mb-8
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    ${action.color}
                    shadow-lg
                  `}
                >
                  <Icon
                    size={36}
                    className="text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="text-2xl font-bold text-white">
                  {action.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-slate-400">
                  {action.description}
                </p>

                {/* Footer */}

                <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 transition-all duration-300 group-hover:gap-4">
                  <span>Open</span>

                  <ArrowRight size={18} />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}