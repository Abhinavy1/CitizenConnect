import { Bell, Search, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const DashboardHeader = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's what's happening with your complaints today.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-64 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 outline-none transition focus:border-emerald-500"
          />
        </div>

        {/* Clock */}
        <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">
          <Clock size={18} className="text-emerald-600" />

          <span className="text-sm font-medium text-slate-700">
            {time.toLocaleTimeString()}
          </span>
        </div>

        {/* Notification */}
        <button className="relative rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-3 py-2">
          <img
            src="https://ui-avatars.com/api/?name=Citizen&background=10b981&color=fff"
            alt="profile"
            className="h-10 w-10 rounded-full"
          />

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Citizen
            </h3>

            <p className="text-xs text-slate-500">
              Verified User
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;