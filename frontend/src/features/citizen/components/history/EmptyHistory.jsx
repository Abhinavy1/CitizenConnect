import { motion } from "framer-motion";
import { Inbox, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyHistory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="
        rounded-3xl
        border
        border-dashed
        border-slate-700
        bg-slate-900
        px-10
        py-20
        text-center
        shadow-xl
      "
    >
      {/* Icon */}

      <div
        className="
          mx-auto
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-cyan-500
          to-blue-600
        "
      >
        <Inbox
          size={52}
          className="text-white"
        />
      </div>

      {/* Title */}

      <h2 className="mt-8 text-4xl font-black text-white">
        No Complaints Found
      </h2>

      {/* Description */}

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
        You haven't submitted any complaints yet. Start by creating a new
        complaint and CitizenConnect AI will help route it to the appropriate
        government department.
      </p>

      {/* Button */}

      <Link
        to="/dashboard/new-complaint"
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-2xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          px-8
          py-4
          text-lg
          font-semibold
          text-white
          transition
          hover:scale-105
        "
      >
        <PlusCircle size={22} />

        Create Complaint
      </Link>
    </motion.div>
  );
}