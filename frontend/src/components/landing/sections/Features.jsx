import {
  BrainCircuit,
  BellRing,
  ShieldCheck,
  BarChart3,
  MapPinned,
  MessageSquareText,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BrainCircuit size={32} />,
    title: "AI Complaint Analysis",
    description:
      "Automatically categorizes complaints, detects duplicates and predicts priority using Artificial Intelligence.",
  },
  {
    icon: <BellRing size={32} />,
    title: "Real-Time Notifications",
    description:
      "Citizens receive instant updates whenever the complaint status changes.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Secure Platform",
    description:
      "Enterprise-grade authentication and secure complaint management for every department.",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Advanced Analytics",
    description:
      "Interactive dashboards with AI insights, complaint trends and department performance.",
  },
  {
    icon: <MapPinned size={32} />,
    title: "Location Tracking",
    description:
      "Attach precise complaint locations for faster officer response and verification.",
  },
  {
    icon: <MessageSquareText size={32} />,
    title: "AI Chat Assistant",
    description:
      "Citizens can ask questions, check complaint status and receive instant AI assistance.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#030712] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">
            Features
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Everything Needed For
            <br />
            Smart Governance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            CitizenConnect combines Artificial Intelligence,
            automation and real-time communication to build
            a transparent complaint management ecosystem.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{
                opacity:0,
                y:40
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              viewport={{
                once:true
              }}
              transition={{
                delay:index*.08
              }}
              whileHover={{
                y:-10,
                scale:1.03
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500/40
                hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
              "
            >

              <div className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                text-white
              ">

                {feature.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                {feature.title}

              </h3>

              <p className="mt-5 leading-7 text-slate-400">

                {feature.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}