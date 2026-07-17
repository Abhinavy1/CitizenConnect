import { useState } from "react";
import {
  Search,
  Filter,
  RotateCcw,
} from "lucide-react";

export default function HistoryFilters() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setCategory("All");
    setPriority("All");
  };

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
          size={24}
          className="text-cyan-400"
        />

        <h2 className="text-2xl font-bold text-white">
          Filters
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
          placeholder="Search by Complaint ID or Title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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

      <div className="mt-6 grid gap-4 md:grid-cols-3">

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
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
          <option>Rejected</option>
        </select>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          <option>Road Damage</option>
          <option>Street Light</option>
          <option>Garbage</option>
          <option>Water Supply</option>
          <option>Electricity</option>
          <option>Government Hospital</option>
          <option>Government School</option>
          <option>Police</option>
        </select>

        {/* Priority */}

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
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
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>

      </div>

      {/* Buttons */}

      <div className="mt-6 flex flex-wrap justify-end gap-4">

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
            font-semibold
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