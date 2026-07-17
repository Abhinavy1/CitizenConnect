import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#030712] px-6 pt-32">
      <div className="mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
          🚀 AI Powered Citizen Complaint Management
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
          Modern Governance
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
            Made Intelligent
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
          CitizenConnect is an AI-powered platform that helps citizens report
          issues, enables officers to resolve complaints efficiently, and gives
          administrators complete transparency through smart analytics.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105">
            Get Started
            <ArrowRight size={20} />
          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
            <Play size={18} />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}