import { motion } from "framer-motion";
import {
  UserCircle2,
  Pencil,
  Download,
} from "lucide-react";

export default function ProfileHeader() {
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
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              shadow-xl
            "
          >
            <UserCircle2
              size={54}
              className="text-white"
            />
          </div>

          <div>

            <h1 className="text-4xl font-black text-white">
              Abhinav Kumar
            </h1>

            <p className="mt-2 text-lg text-slate-300">
              Verified Citizen
            </p>

            <p className="mt-2 text-slate-400">
              Citizen ID • CC-IND-2026-10458
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
            <Download size={20} />

            Download Profile

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
            <Pencil size={20} />

            Edit Profile

          </button>

        </div>

      </div>

      {/* Bottom Statistics */}

      <div className="mt-8 grid gap-6 md:grid-cols-4">

        <Stat
          title="Complaints"
          value="42"
        />

        <Stat
          title="Resolved"
          value="31"
        />

        <Stat
          title="Success Rate"
          value="93%"
        />

        <Stat
          title="Member Since"
          value="2026"
        />

      </div>

    </motion.div>
  );
}

function Stat({
  title,
  value,
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-slate-950/70
        p-5
        text-center
      "
    >
      <h3 className="text-sm text-slate-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-black text-cyan-400">
        {value}
      </p>
    </div>
  );
}