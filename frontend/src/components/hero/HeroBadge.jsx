import { Sparkles } from "lucide-react";

function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">

      <Sparkles
        size={18}
        className="text-cyan-400"
      />

      <span className="text-sm font-medium text-cyan-300">

        AI Powered Smart Governance Platform

      </span>

    </div>
  );
}

export default HeroBadge;