import { Sparkles } from "lucide-react";

export default function DashboardAIWidget() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-cyan-500/20
      bg-gradient-to-br
      from-blue-700/20
      via-slate-900
      to-cyan-700/20
      p-6
      backdrop-blur-xl
    "
    >
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-cyan-500/20 p-3">
          <Sparkles
            className="text-cyan-300"
            size={24}
          />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            AI Assistant
          </h2>

          <p className="text-sm text-slate-400">
            Complaint Intelligence
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <div className="rounded-2xl bg-white/5 p-4">
          <h3 className="font-semibold text-cyan-300">
            AI Summary
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            12 complaints are pending.
            AI recommends assigning 4 additional
            officers to Road Maintenance.
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-4">
          <h3 className="font-semibold text-cyan-300">
            Prediction
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Resolution rate is expected
            to improve by 16% this week.
          </p>
        </div>
      </div>
    </div>
  );
}