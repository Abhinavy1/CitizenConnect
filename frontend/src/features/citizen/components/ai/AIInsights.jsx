import {
  Sparkles,
  TrendingUp,
  TriangleAlert,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Resolution Rate Improved",
    description:
      "Your complaint resolution rate increased by 18% this month.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: TriangleAlert,
    title: "High Priority Complaint",
    description:
      "Road Damage complaint may require urgent attention based on similar cases.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: Lightbulb,
    title: "AI Recommendation",
    description:
      "Adding location photos can increase complaint resolution speed.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function AIInsights() {
  return (
    <section className="mt-8">

      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-8 shadow-2xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500">

              <Sparkles size={28} className="text-white" />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">

                AI Insights

              </h2>

              <p className="mt-1 text-slate-400">

                Personalized recommendations powered by AI

              </p>

            </div>

          </div>

          <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400">

            Open AI

            <ArrowRight size={18} />

          </button>

        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {insights.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-500"
              >

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                >

                  <Icon
                    size={28}
                    className={item.color}
                  />

                </div>

                <h3 className="text-xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-400">

                  {item.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}