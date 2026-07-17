import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", complaints: 18 },
  { month: "Feb", complaints: 26 },
  { month: "Mar", complaints: 21 },
  { month: "Apr", complaints: 35 },
  { month: "May", complaints: 42 },
  { month: "Jun", complaints: 38 },
  { month: "Jul", complaints: 54 },
  { month: "Aug", complaints: 49 },
  { month: "Sep", complaints: 61 },
  { month: "Oct", complaints: 58 },
  { month: "Nov", complaints: 72 },
  { month: "Dec", complaints: 66 },
];

export default function ComplaintChart() {
  return (
    <section className="mt-8">

      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">

              Complaint Analytics

            </h2>

            <p className="mt-2 text-slate-400">

              Monthly complaint trends

            </p>

          </div>

          <div className="rounded-xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">

            +18.4%

          </div>

        </div>

        <div className="h-[380px]">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={data}>

              <defs>

                <linearGradient
                  id="colorComplaints"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#06b6d4"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="100%"
                    stopColor="#06b6d4"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#334155"
              />

              <XAxis
                dataKey="month"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip
                contentStyle={{
                  background: "#0f172a",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: "18px",
                  color: "#fff",
                }}
              />

              <Area
                type="monotone"
                dataKey="complaints"
                stroke="#06b6d4"
                strokeWidth={4}
                fill="url(#colorComplaints)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>
  );
}