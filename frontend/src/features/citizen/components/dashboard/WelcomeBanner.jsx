import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
} from "lucide-react";

const WelcomeBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-8 text-white shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-16 left-20 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">
              CitizenConnect Smart Dashboard
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold leading-tight">
            Welcome Back 👋
            <br />
            Let's Make Our City Better.
          </h1>

          <p className="max-w-xl text-emerald-100">
            Track complaints, monitor progress, communicate with officers and
            receive AI-powered assistance through one unified citizen platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:scale-105">
              Create Complaint
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md transition hover:bg-white/20">
              View Dashboard
            </button>
          </div>
        </div>

        {/* Right Stats */}
        <div className="grid w-full max-w-lg grid-cols-2 gap-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-white/10 p-5 backdrop-blur-xl"
          >
            <ShieldCheck className="mb-3 text-green-300" size={32} />

            <h3 className="text-3xl font-bold">96%</h3>

            <p className="mt-2 text-sm text-emerald-100">
              Complaint Resolution Rate
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-white/10 p-5 backdrop-blur-xl"
          >
            <TrendingUp className="mb-3 text-yellow-300" size={32} />

            <h3 className="text-3xl font-bold">+32%</h3>

            <p className="mt-2 text-sm text-emerald-100">
              Faster Response Time
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-white/10 p-5 backdrop-blur-xl"
          >
            <BadgeCheck className="mb-3 text-cyan-300" size={32} />

            <h3 className="text-3xl font-bold">4.9★</h3>

            <p className="mt-2 text-sm text-emerald-100">
              Citizen Satisfaction
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-white/10 p-5 backdrop-blur-xl"
          >
            <Sparkles className="mb-3 text-pink-300" size={32} />

            <h3 className="text-3xl font-bold">AI</h3>

            <p className="mt-2 text-sm text-emerald-100">
              Smart Complaint Assistant
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;