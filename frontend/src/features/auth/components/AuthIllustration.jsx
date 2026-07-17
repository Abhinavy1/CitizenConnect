import { ShieldCheck, BrainCircuit, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function AuthIllustration() {
  return (
    <div className="relative flex items-center justify-center">

      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
          absolute
          h-72
          w-72
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />

      <div className="relative z-10 rounded-[40px] border border-white/10 bg-slate-900/80 p-10 backdrop-blur-xl">

        <div className="grid gap-6">

          <Card
            icon={<ShieldCheck size={30} />}
            title="Secure Authentication"
          />

          <Card
            icon={<BrainCircuit size={30} />}
            title="AI Powered Platform"
          />

          <Card
            icon={<Lock size={30} />}
            title="Enterprise Security"
          />

        </div>

      </div>

    </div>
  );
}

function Card({ icon, title }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="
        flex
        items-center
        gap-5
        rounded-2xl
        bg-slate-800
        p-6
      "
    >
      <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4 text-white">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>
    </motion.div>
  );
}