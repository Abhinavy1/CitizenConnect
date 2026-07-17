import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UserCircle2,
  BadgeCheck,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function UserProfileCard() {
  // Temporary mock data
  // Replace with Context/API later
  const user = {
    name: "Abhinav Kumar",
    role: "Verified Citizen",
    citizenId: "CC-2026-10452",
    profileCompletion: 92,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        mt-auto
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-5
        shadow-xl
      "
    >
      {/* User */}

      <div className="flex items-center gap-4">

        <div className="relative">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
            "
          >

            <UserCircle2
              size={38}
              className="text-white"
            />

          </div>

          <span
            className="
              absolute
              bottom-0
              right-0
              h-4
              w-4
              rounded-full
              border-2
              border-slate-900
              bg-emerald-500
            "
          />

        </div>

        <div className="flex-1">

          <h3 className="text-lg font-bold text-white">
            {user.name}
          </h3>

          <div className="mt-1 flex items-center gap-2">

            <BadgeCheck
              size={16}
              className="text-emerald-400"
            />

            <span className="text-sm text-emerald-400">
              {user.role}
            </span>

          </div>

        </div>

      </div>

      {/* Citizen ID */}

      <div className="mt-6 rounded-2xl bg-slate-950 p-4">

        <p className="text-xs uppercase tracking-wider text-slate-500">
          Citizen ID
        </p>

        <h4 className="mt-2 text-base font-semibold text-cyan-400">
          {user.citizenId}
        </h4>

      </div>

      {/* Completion */}

      <div className="mt-6">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Profile Completion
          </span>

          <span className="font-bold text-white">
            {user.profileCompletion}%
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            style={{
              width: `${user.profileCompletion}%`,
            }}
          />

        </div>

      </div>

      {/* Logout */}

      <Link
        to="/login"
        className="
          group
          mt-6
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-red-500/20
          bg-red-500/10
          px-4
          py-3
          transition-all
          duration-300
          hover:bg-red-500/20
        "
      >

        <div className="flex items-center gap-3">

          <LogOut
            size={20}
            className="text-red-400"
          />

          <span className="font-semibold text-red-300">
            Logout
          </span>

        </div>

        <ChevronRight
          size={18}
          className="text-red-400 transition-transform group-hover:translate-x-1"
        />

      </Link>

    </motion.div>
  );
}