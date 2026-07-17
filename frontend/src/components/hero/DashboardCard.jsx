export default function DashboardCard({
  title,
  value,
  change,
  icon,
  color = "text-cyan-400",
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            {value}
          </h2>

          <p className={`mt-2 text-sm font-semibold ${color}`}>
            {change}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 p-4 text-cyan-400">
          {icon}
        </div>

      </div>

    </div>
  );
}