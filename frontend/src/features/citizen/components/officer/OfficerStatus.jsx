import {
  Users,
  ShieldCheck,
  Clock3,
  CircleCheckBig,
} from "lucide-react";

const officers = [
  {
    title: "Officers Online",
    value: 24,
    icon: Users,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Available Now",
    value: 18,
    icon: ShieldCheck,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Avg. Response",
    value: "32 min",
    icon: Clock3,
    color: "from-violet-500 to-indigo-600",
  },
  {
    title: "Resolved Today",
    value: 46,
    icon: CircleCheckBig,
    color: "from-orange-500 to-red-500",
  },
];

export default function OfficerStatus() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

      <div className="border-b border-white/10 p-8">

        <h2 className="text-2xl font-bold text-white">

          Officer Status

        </h2>

        <p className="mt-2 text-slate-400">

          Live department performance

        </p>

      </div>

      <div className="grid gap-6 p-8">

        {officers.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-900"
            >

              <div>

                <p className="text-sm text-slate-400">

                  {item.title}

                </p>

                <h3 className="mt-3 text-3xl font-black text-white">

                  {item.value}

                </h3>

              </div>

              <div
                className={`
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  ${item.color}
                  shadow-lg
                `}
              >

                <Icon
                  size={30}
                  className="text-white"
                />

              </div>

            </div>

          );

        })}

      </div>

      <div className="border-t border-white/10 p-8">

        <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-6">

          <h3 className="text-xl font-bold text-white">

            AI Performance

          </h3>

          <p className="mt-3 text-cyan-100 leading-7">

            AI predicts a 93% probability that all pending complaints
            submitted today will be assigned to an officer within the
            next 45 minutes.

          </p>

        </div>

      </div>

    </section>
  );
}