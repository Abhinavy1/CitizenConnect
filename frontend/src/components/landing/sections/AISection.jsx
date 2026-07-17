import {
  Sparkles,
  BrainCircuit,
  Bot,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: <BrainCircuit size={22} />,
    title: "AI Complaint Classification",
    description:
      "Automatically categorizes complaints into the correct government department.",
  },
  {
    icon: <Bot size={22} />,
    title: "Smart Assistant",
    description:
      "Citizens can ask questions and receive instant AI-powered responses.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Duplicate Detection",
    description:
      "AI identifies duplicate complaints to reduce workload and improve efficiency.",
  },
  {
    icon: <Zap size={22} />,
    title: "Priority Prediction",
    description:
      "Urgent complaints are automatically detected and prioritized.",
  },
];

export default function AISection() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">

              <Sparkles
                className="text-cyan-300"
                size={18}
              />

              <span className="text-sm font-semibold text-cyan-300">

                Artificial Intelligence

              </span>

            </div>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white">

              AI That Makes
              <br />

              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">

                Governance Smarter

              </span>

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              CitizenConnect integrates Artificial Intelligence
              throughout the complaint lifecycle—from classification
              to prediction—helping governments respond faster and
              improving transparency for every citizen.

            </p>

            <button className="mt-10 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105">

              Explore AI

              <ArrowRight size={20} />

            </button>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="grid gap-6"
          >

            {capabilities.map((item, index) => (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: .2,
                }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-slate-900/70
                  p-7
                  backdrop-blur-xl
                  hover:border-cyan-500/40
                  hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
                "
              >

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">

                      {item.description}

                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}