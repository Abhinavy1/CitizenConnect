import { motion } from "framer-motion";
import {
  Database,
  Download,
  Upload,
  Trash2,
  RefreshCw,
  HardDrive,
} from "lucide-react";

export default function DataSettings() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
        bg-slate-900
        p-8
        shadow-xl
      "
    >
      {/* Header */}

      <div className="mb-8">

        <h2 className="text-3xl font-black text-white">
          Data & Storage
        </h2>

        <p className="mt-2 text-slate-400">
          Manage your account data, storage usage and exports.
        </p>

      </div>

      {/* Storage */}

      <div className="rounded-2xl bg-slate-950 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <HardDrive
              size={24}
              className="text-cyan-400"
            />

            <span className="text-lg font-bold text-white">
              Storage Usage
            </span>

          </div>

          <span className="text-cyan-400 font-bold">
            1.8 GB / 5 GB
          </span>

        </div>

        <div className="mt-5 h-3 rounded-full bg-slate-800">

          <div
            className="
              h-full
              w-[36%]
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
            "
          />

        </div>

      </div>

      {/* Statistics */}

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <StatCard
          title="Complaints"
          value="42"
        />

        <StatCard
          title="Images"
          value="86"
        />

        <StatCard
          title="Documents"
          value="15"
        />

      </div>

      {/* Actions */}

      <div className="mt-8 space-y-5">

        <ActionButton
          icon={Download}
          title="Download My Data"
          description="Download your complete CitizenConnect data."
          color="bg-cyan-500 hover:bg-cyan-600"
        />

        <ActionButton
          icon={Upload}
          title="Export Complaints"
          description="Export all complaints as PDF or CSV."
          color="bg-emerald-500 hover:bg-emerald-600"
        />

        <ActionButton
          icon={RefreshCw}
          title="Clear Cache"
          description="Remove temporary files to free storage."
          color="bg-amber-500 hover:bg-amber-600"
        />

        <ActionButton
          icon={Trash2}
          title="Delete Account"
          description="Permanently delete your CitizenConnect account."
          color="bg-red-500 hover:bg-red-600"
        />

      </div>

      {/* Warning */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-red-500/20
          bg-red-500/10
          p-5
        "
      >
        <div className="flex items-start gap-3">

          <Database
            size={22}
            className="mt-1 text-red-400"
          />

          <div>

            <h3 className="font-bold text-white">
              Important Notice
            </h3>

            <p className="mt-2 leading-7 text-slate-300">
              Deleting your account is permanent. All complaints,
              uploaded documents, AI conversations, and profile data
              will be permanently removed and cannot be recovered.
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

function StatCard({
  title,
  value,
}) {
  return (
    <div className="rounded-2xl bg-slate-950 p-5 text-center">

      <p className="text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-black text-white">
        {value}
      </h3>

    </div>
  );
}

function ActionButton({
  icon: Icon,
  title,
  description,
  color,
}) {
  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-between
        rounded-2xl
        bg-slate-950
        p-5
        transition
        hover:bg-slate-800
      "
    >
      <div className="flex items-center gap-4">

        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            text-white
            ${color}
          `}
        >
          <Icon size={22} />
        </div>

        <div className="text-left">

          <h3 className="font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {description}
          </p>

        </div>

      </div>

    </button>
  );
}