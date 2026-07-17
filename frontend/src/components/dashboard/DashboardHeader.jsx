import {
  Bell,
  Search,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <div
      className="
      flex
      items-center
      justify-between
      border-b
      border-white/10
      px-8
      py-5
    "
    >
      <h2 className="text-xl font-bold text-white">
        Citizen Dashboard
      </h2>

      <div className="flex items-center gap-5">
        <Search className="text-slate-400" />

        <Bell className="text-slate-400" />

        <div
          className="
          h-10
          w-10
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
        "
        />
      </div>
    </div>
  );
}