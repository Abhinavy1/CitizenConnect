import { motion } from "framer-motion";
import GlassCard from "../../../components/ui/GlassCard";

function AuthCard({ title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="w-full max-w-md"
    >
      <GlassCard hover={false} className="border-white/10">

        <div className="mb-8">

          <div className="mb-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            CitizenConnect
          </div>

          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-2 text-slate-400">
            {subtitle}
          </p>

        </div>

        {children}

      </GlassCard>
    </motion.div>
  );
}

export default AuthCard;