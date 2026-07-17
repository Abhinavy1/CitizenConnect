import {
  Search,
  Bell,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 px-8 py-6 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">

            Good Morning 👋

          </h2>

          <p className="mt-2 text-slate-400">

            Welcome back to CitizenConnect

          </p>

        </div>

        <div className="flex items-center gap-6">

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-5 py-3">

            <Search size={18} />

            <input
              placeholder="Search..."
              className="bg-transparent outline-none"
            />

          </div>

          <button className="rounded-2xl bg-slate-900 p-3 hover:bg-slate-800">

            <Bell size={20} />

          </button>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold">

            A

          </div>

        </div>

      </div>

    </header>
  );
}