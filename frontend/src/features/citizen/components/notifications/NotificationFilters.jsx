import { useState } from "react";
import {
  Search,
  Filter,
  RotateCcw,
} from "lucide-react";

export default function NotificationFilters() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  function resetFilters() {
    setSearch("");
    setType("All");
    setStatus("All");
    setSortBy("Latest");
  }

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-6
        shadow-xl
      "
    >
      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <Filter
          size={22}
          className="text-cyan-400"
        />

        <h2 className="text-2xl font-bold text-white">
          Filter Notifications
        </h2>

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search notifications..."
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-950
            py-4
            pl-12
            pr-4
            text-white
            outline-none
            transition
            focus:border-cyan-500
          "
        />

      </div>

      {/* Filters */}

      <div className="mt-6 grid gap-4 lg:grid-cols-3">

        {/* Type */}

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="
            rounded-2xl
            border
            border-white/10
            bg-slate-950
            p-4
            text-white
            outline-none
          "
        >
          <option>All</option>
          <option>Complaint</option>
          <option>AI Alert</option>
          <option>System</option>
          <option>Emergency</option>
        </select>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
            rounded-2xl
            border
            border-white/10
            bg-slate-950
            p-4
            text-white
            outline-none
          "
        >
          <option>All</option>
          <option>Unread</option>
          <option>Read</option>
        </select>

        {/* Sort */}

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="
            rounded-2xl
            border
            border-white/10
            bg-slate-950
            p-4
            text-white
            outline-none
          "
        >
          <option>Latest</option>
          <option>Oldest</option>
        </select>

      </div>

      {/* Buttons */}

      <div className="mt-6 flex justify-end gap-4">

        <button
          onClick={resetFilters}
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-white/10
            bg-slate-800
            px-5
            py-3
            text-white
            transition
            hover:bg-slate-700
          "
        >
          <RotateCcw size={18} />
          Reset
        </button>

        <button
          className="
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:scale-105
          "
        >
          Apply Filters
        </button>

      </div>

    </div>
  );
}