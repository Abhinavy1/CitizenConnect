import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";

import { TypeAnimation } from "react-type-animation";
import { CheckCircle2 } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <HeroBadge />

      <h1 className="mt-8 text-5xl font-black leading-[1.05] text-white md:text-6xl xl:text-7xl">

        AI Powered

        <br />

        <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">

          Citizen Complaint

        </span>

        <br />

        Management Platform

      </h1>

      <div className="mt-8 text-2xl font-semibold text-cyan-300">

        <TypeAnimation
          sequence={[
            "Built for Smart Cities",
            2200,
            "AI Driven Resolution",
            2200,
            "Real-Time Complaint Tracking",
            2200,
            "Transparent Governance",
            2200,
          ]}
          repeat={Infinity}
        />

      </div>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

        Empower citizens and government departments with an AI-powered
        complaint management platform that delivers transparency,
        automation, faster resolutions and real-time insights.

      </p>

      <HeroButtons />

      <div className="mt-12 flex flex-wrap gap-8">

        <Stat
          value="20K+"
          title="Citizens"
        />

        <Stat
          value="98%"
          title="Resolution Rate"
        />

        <Stat
          value="24/7"
          title="AI Monitoring"
        />

      </div>

      <div className="mt-12 flex items-center gap-3">

        <CheckCircle2
          size={22}
          className="text-emerald-400"
        />

        <p className="text-slate-300">

          Trusted by municipalities and smart city initiatives.

        </p>

      </div>

    </div>
  );
}

function Stat({
  value,
  title,
}) {
  return (
    <div>

      <h2 className="text-4xl font-black text-white">

        {value}

      </h2>

      <p className="mt-2 text-slate-500">

        {title}

      </p>

    </div>
  );
}