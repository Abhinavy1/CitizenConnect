import { motion } from "framer-motion";

const values = [55, 80, 65, 120, 95, 145, 115];

export default function DashboardChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">
            Complaint Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Monthly Resolved Complaints
          </p>
        </div>

        <div className="rounded-xl bg-blue-600/20 px-3 py-2 text-sm text-cyan-300">
          +18%
        </div>
      </div>

      <div className="mt-10 flex h-60 items-end gap-4">
        {values.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-700 via-cyan-500 to-sky-300"
          />
        ))}
      </div>
    </div>
  );
}