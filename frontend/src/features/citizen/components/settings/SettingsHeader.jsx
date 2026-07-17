import { motion } from "framer-motion";
import {
  Settings,
  Save,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

export default function SettingsHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
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
        bg-gradient-to-r
        from-slate-900
        via-slate-900
        to-cyan-950/40
        p-8
        shadow-xl
      "
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-center gap-6">

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              shadow-xl
            "
          >
            <Settings
              size={40}
              className="text-white"
            />
          </div>

          <div>

            <h1 className="text-4xl font-black text-white">
              Settings
            </h1>

            <p className="mt-3 text-slate-400">
              Customize your CitizenConnect account,
              privacy, notifications, AI preferences,
              and security settings.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-4">

          <button
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-slate-900
              px-6
              py-4
              text-white
              transition
              hover:border-cyan-500
            "
          >
            <RotateCcw size={20} />

            Reset

          </button>

          <button
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-6
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
            "
          >
            <Save size={20} />

            Save Changes

          </button>

        </div>

      </div>

      {/* Security Status */}

      <div
        className="
          mt-8
          flex
          items-center
          gap-4
          rounded-2xl
          border
          border-emerald-500/20
          bg-emerald-500/10
          p-5
        "
      >
        <ShieldCheck
          size={28}
          className="text-emerald-400"
        />

        <div>

          <h3 className="font-bold text-white">
            Account Status
          </h3>

          <p className="mt-1 text-slate-300">
            Your account is verified and follows the recommended
            security practices. Security Score:{" "}
            <span className="font-bold text-emerald-400">
              92%
            </span>
          </p>

        </div>

      </div>

    </motion.div>
  );
}