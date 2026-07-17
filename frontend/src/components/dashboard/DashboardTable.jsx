const complaints = [
  {
    id: "#CC1024",
    issue: "Road Damage",
    status: "Pending",
  },
  {
    id: "#CC1025",
    issue: "Water Leakage",
    status: "Resolved",
  },
  {
    id: "#CC1026",
    issue: "Street Lights",
    status: "In Progress",
  },
  {
    id: "#CC1027",
    issue: "Garbage Collection",
    status: "Pending",
  },
];

export default function DashboardTable() {
  const colors = {
    Pending: "bg-yellow-500/20 text-yellow-300",
    Resolved: "bg-green-500/20 text-green-300",
    "In Progress": "bg-blue-500/20 text-blue-300",
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-white">
          Recent Complaints
        </h2>

        <button className="text-cyan-400 hover:text-cyan-300 text-sm">
          View All
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10 text-left text-slate-400">
            <th className="pb-3">ID</th>
            <th className="pb-3">Issue</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((item) => (
            <tr
              key={item.id}
              className="border-b border-white/5"
            >
              <td className="py-4 text-white">
                {item.id}
              </td>

              <td className="text-slate-300">
                {item.issue}
              </td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${colors[item.status]}`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}