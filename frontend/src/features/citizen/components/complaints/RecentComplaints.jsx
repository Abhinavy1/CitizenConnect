import {
  Clock3,
  CircleCheckBig,
  LoaderCircle,
  AlertCircle,
} from "lucide-react";

const complaints = [
  {
    id: "#CC1001",
    title: "Street Light Not Working",
    category: "Electricity",
    status: "Pending",
    date: "14 Jul 2026",
  },
  {
    id: "#CC1002",
    title: "Garbage Collection Delay",
    category: "Sanitation",
    status: "In Progress",
    date: "12 Jul 2026",
  },
  {
    id: "#CC1003",
    title: "Water Leakage",
    category: "Water Supply",
    status: "Resolved",
    date: "09 Jul 2026",
  },
  {
    id: "#CC1004",
    title: "Road Damage",
    category: "Road Maintenance",
    status: "Pending",
    date: "07 Jul 2026",
  },
];

function Badge({ status }) {
  if (status === "Pending") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-semibold text-yellow-400">
        <Clock3 size={15} />
        Pending
      </span>
    );
  }

  if (status === "In Progress") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400">
        <LoaderCircle size={15} />
        In Progress
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400">
      <CircleCheckBig size={15} />
      Resolved
    </span>
  );
}

export default function RecentComplaints() {
  return (
    <section className="mt-8">

      <div className="rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

        <div className="flex items-center justify-between border-b border-white/10 p-8">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Recent Complaints
            </h2>

            <p className="mt-2 text-slate-400">
              Your latest complaint activities
            </p>

          </div>

          <button className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-400">
            View All
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-white/10 text-left text-slate-400">

                <th className="px-8 py-5">Complaint ID</th>

                <th className="px-8 py-5">Title</th>

                <th className="px-8 py-5">Category</th>

                <th className="px-8 py-5">Status</th>

                <th className="px-8 py-5">Date</th>

              </tr>

            </thead>

            <tbody>

              {complaints.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >

                  <td className="px-8 py-6 font-semibold text-cyan-400">
                    {item.id}
                  </td>

                  <td className="px-8 py-6 text-white">
                    {item.title}
                  </td>

                  <td className="px-8 py-6 text-slate-300">
                    {item.category}
                  </td>

                  <td className="px-8 py-6">
                    <Badge status={item.status} />
                  </td>

                  <td className="px-8 py-6 text-slate-400">
                    {item.date}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}