import { motion } from "framer-motion";
import {
  Construction,
  Hospital,
  School,
  Shield,
  FileText,
  Landmark,
  Lightbulb,
} from "lucide-react";

const prompts = [
  {
    title: "Report Road Damage",
    description: "Create a complaint for potholes or damaged roads.",
    icon: Construction,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Government Hospital",
    description: "Get healthcare services and complaint guidance.",
    icon: Hospital,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "School Complaint",
    description: "Report issues related to government schools.",
    icon: School,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Police Assistance",
    description: "Receive help with police-related complaints.",
    icon: Shield,
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Generate Complaint",
    description: "Let AI draft a professional complaint for you.",
    icon: FileText,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Government Schemes",
    description: "Explore schemes and citizen welfare programs.",
    icon: Landmark,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Ask Anything",
    description: "Get instant answers from CitizenConnect AI.",
    icon: Lightbulb,
    color: "from-pink-500 to-purple-600",
  },
];

export default function QuickPrompts() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Prompts
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {prompts.map((prompt, index) => {
          const Icon = prompt.icon;

          return (
            <motion.button
              key={prompt.title}
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
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900
                p-6
                text-left
                shadow-xl
                transition
                hover:border-cyan-500
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
                  ${prompt.color}
                `}
              >
                <Icon
                  size={30}
                  className="text-white"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {prompt.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {prompt.description}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}