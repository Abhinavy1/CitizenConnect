import { motion } from "framer-motion";
import {
  History,
  Download,
  FileSpreadsheet,
} from "lucide-react";

export default function HistoryHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
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

        <div>

          <div className="flex items-center gap-4">

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
              <History
                size={34}
                className="text-white"
              />
            </div>

            <div>

              <h1 className="text-4xl font-black text-white">
                Complaint History
              </h1>

              <p className="mt-2 text-slate-400">
                View and manage all your submitted complaints.
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex gap-4">

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
            Export PDF
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
            <FileSpreadsheet size={20} />
            Export CSV
          </button>

        </div>

      </div>
    </motion.div>
  );
}