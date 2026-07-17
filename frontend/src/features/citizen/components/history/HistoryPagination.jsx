import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HistoryPagination() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
        mt-8
        flex
        flex-col
        gap-5
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-6
        shadow-xl
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Left */}

      <div className="text-slate-400">
        Showing
        <span className="mx-2 font-bold text-white">
          1
        </span>
        to
        <span className="mx-2 font-bold text-white">
          10
        </span>
        of
        <span className="mx-2 font-bold text-cyan-400">
          42
        </span>
        complaints
      </div>

      {/* Pagination */}

      <div className="flex items-center gap-3">

        {/* Previous */}

        <button
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
            hover:border-cyan-500
          "
        >
          <ChevronLeft size={18} />

          Previous

        </button>

        {/* Page Numbers */}

        {[1, 2, 3, 4].map((page) => (

          <button
            key={page}
            className={`
              h-11
              w-11
              rounded-xl
              font-semibold
              transition

              ${
                page === 1
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }
            `}
          >
            {page}
          </button>

        ))}

        {/* Next */}

        <button
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
            hover:border-cyan-500
          "
        >
          Next

          <ChevronRight size={18} />

        </button>

      </div>

      {/* Rows Per Page */}

      <div className="flex items-center gap-3">

        <span className="text-slate-400">
          Rows
        </span>

        <select
          className="
            rounded-xl
            border
            border-white/10
            bg-slate-800
            px-4
            py-2
            text-white
            outline-none
          "
        >
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>

      </div>

    </motion.div>
  );
}