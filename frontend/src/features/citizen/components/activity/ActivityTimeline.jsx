import { motion } from "framer-motion";
import { activityData } from "../../data/activityData";

export default function ActivityTimeline() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

      {/* Header */}

      <div className="border-b border-white/10 p-8">

        <h2 className="text-2xl font-bold text-white">

          Live Activity

        </h2>

        <p className="mt-2 text-slate-400">

          Recent complaint updates and AI events

        </p>

      </div>

      {/* Timeline */}

      <div className="relative p-8">

        {/* Vertical Line */}

        <div className="absolute left-[39px] top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent opacity-30" />

        <div className="space-y-8">

          {activityData.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative flex gap-6"
              >

                {/* Timeline Icon */}

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    ${item.color}
                    border
                    border-white/10
                    shadow-lg
                  `}
                >

                  <Icon
                    size={24}
                    className={item.text}
                  />

                </div>

                {/* Content Card */}

                <div className="group flex-1 rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900">

                  <div className="flex items-center justify-between">

                    <h3 className="text-lg font-semibold text-white">

                      {item.title}

                    </h3>

                    <span className="text-sm text-slate-500">

                      {item.time}

                    </span>

                  </div>

                  <p className="mt-4 leading-7 text-slate-400">

                    {item.description}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}