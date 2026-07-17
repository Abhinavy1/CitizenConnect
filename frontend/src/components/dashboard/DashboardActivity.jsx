export default function DashboardActivity({
  title,
  status,
}) {
  const colors = {
    Pending: "text-yellow-400",
    Resolved: "text-green-400",
    "In Progress": "text-blue-400",
  };

  return (
    <div className="flex items-center justify-between border-b border-white/5 py-4 last:border-none">
      <p className="text-slate-300">
        {title}
      </p>

      <span
        className={`font-semibold ${colors[status]}`}
      >
        {status}
      </span>
    </div>
  );
}