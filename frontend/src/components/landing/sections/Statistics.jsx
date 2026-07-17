import {
  Users,
  CheckCircle2,
  Building2,
  BrainCircuit,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Users size={34} />,
    value: "20K+",
    title: "Active Citizens",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: <CheckCircle2 size={34} />,
    value: "98%",
    title: "Resolution Rate",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: <Building2 size={34} />,
    value: "150+",
    title: "Government Departments",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: <BrainCircuit size={34} />,
    value: "24/7",
    title: "AI Monitoring",
    color: "from-cyan-500 to-sky-500",
  },
];

export default function Statistics() {
  return (
    <section className="bg-[#030712] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Platform Statistics
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Trusted Across
            <br />
            Smart Cities
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            CitizenConnect empowers governments with AI-powered complaint
            management, real-time analytics and transparent governance.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                p-8
                text-center
                backdrop-blur-xl
                hover:border-cyan-500/40
                hover:shadow-[0_0_45px_rgba(34,211,238,.18)]
              "
            >
              <div
                className={`
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-gradient-to-br
                  ${item.color}
                  text-white
                `}
              >
                {item.icon}
              </div>

              <h3 className="mt-8 text-5xl font-black text-white">
                {item.value}
              </h3>

              <p className="mt-4 text-slate-400">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}