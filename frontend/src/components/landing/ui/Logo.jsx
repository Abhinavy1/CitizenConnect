import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link to="/">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-400 shadow-lg shadow-cyan-500/30">
          <ShieldCheck
            className="text-white"
            size={24}
          />
        </div>

        <div>

          <h1 className="text-xl font-black tracking-tight text-white">

            CitizenConnect

          </h1>

          <p className="text-xs text-slate-400">

            AI Powered Governance

          </p>

        </div>

      </motion.div>
    </Link>
  );
}