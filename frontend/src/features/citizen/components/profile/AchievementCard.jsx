import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Zap,
  Users,
  Trophy,
  ChevronRight,
} from "lucide-react";

const achievements = [
  {
    title: "Gold Citizen",
    description: "Resolved more than 30 complaints successfully.",
    icon: Trophy,
    color: "from-yellow-500 to-amber-500",
    earned: true,
  },
  {
    title: "Trusted Citizen",
    description: "Maintained a complaint approval rate above 90%.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-green-600",
    earned: true,
  },
  {
    title: "Fast Reporter",
    description: "Reported 10+ civic issues with complete information.",
    icon: Zap,
    color: "from-cyan-500 to-blue-600",
    earned: true,
  },
  {
    title: "Community Helper",
    description: "Actively contributed to improving your locality.",
    icon: Users,
    color: "from-violet-500 to-purple-600",
    earned: false,
  },
];

export default function AchievementCard() {
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
            from-yellow-500
            to-orange-500
          "
        >
          <Award
            size={32}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-3xl font-black text-white">
            Achievements
          </h2>

          <p className="mt-2 text-slate-400">
            Your contribution to building a better community.
          </p>

        </div>

      </div>

      {/* Achievement List */}

      <div className="mt-8 space-y-5">

        {achievements.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
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
              whileHover={{
                x: 5,
              }}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-slate-950
                p-5
              "
            >

              <div className="flex items-center gap-5">

                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${item.color}
                  `}
                >
                  <Icon
                    size={26}
                    className="text-white"
                  />
                </div>

                <div>

                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <span
                  className={`
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold

                    ${
                      item.earned
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-slate-800 text-slate-400"
                    }
                  `}
                >
                  {item.earned ? "Unlocked" : "Locked"}
                </span>

                <ChevronRight
                  size={20}
                  className="text-slate-500"
                />

              </div>

            </motion.div>

          );

        })}

      </div>

      {/* Progress */}

      <div className="mt-8 rounded-2xl bg-slate-950 p-6">

        <div className="flex items-center justify-between">

          <span className="font-semibold text-white">
            Progress to Platinum Citizen
          </span>

          <span className="text-cyan-400">
            75%
          </span>

        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "75%",
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

      </div>

    </motion.div>
  );
}