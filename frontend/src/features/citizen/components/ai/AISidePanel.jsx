import { motion } from "framer-motion";
import {
  Clock3,
  Star,
  FileText,
  TrendingUp,
  Sparkles,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

const recentChats = [
  "Road Damage Complaint",
  "Government Hospital Help",
  "Property Tax Query",
  "Scholarship Information",
];

const quickActions = [
  "Generate Complaint",
  "Find Government Office",
  "Check Complaint Status",
  "Government Schemes",
];

export default function AISidePanel() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        space-y-6
      "
    >
      {/* AI Stats */}

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
        <h2 className="text-xl font-bold text-white">
          AI Statistics
        </h2>

        <div className="mt-6 space-y-5">

          <Stat
            icon={MessageSquare}
            title="Chats"
            value="126"
            color="text-cyan-400"
          />

          <Stat
            icon={Sparkles}
            title="AI Responses"
            value="948"
            color="text-violet-400"
          />

          <Stat
            icon={TrendingUp}
            title="Accuracy"
            value="98%"
            color="text-emerald-400"
          />

        </div>
      </div>

      {/* Recent Conversations */}

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
        <div className="flex items-center gap-3">

          <Clock3
            size={22}
            className="text-cyan-400"
          />

          <h2 className="text-xl font-bold text-white">
            Recent Chats
          </h2>

        </div>

        <div className="mt-6 space-y-3">

          {recentChats.map((chat) => (

            <button
              key={chat}
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                bg-slate-800
                px-4
                py-3
                text-left
                text-white
                transition
                hover:bg-slate-700
              "
            >

              <span>{chat}</span>

              <ChevronRight size={18} />

            </button>

          ))}

        </div>

      </div>

      {/* Quick Actions */}

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
        <div className="flex items-center gap-3">

          <Star
            size={22}
            className="text-yellow-400"
          />

          <h2 className="text-xl font-bold text-white">
            Quick Actions
          </h2>

        </div>

        <div className="mt-6 space-y-3">

          {quickActions.map((item) => (

            <button
              key={item}
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                bg-slate-800
                px-4
                py-3
                text-left
                text-white
                transition
                hover:bg-cyan-600
              "
            >

              <span>{item}</span>

              <ChevronRight size={18} />

            </button>

          ))}

        </div>

      </div>

      {/* Uploaded Files */}

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
        <div className="flex items-center gap-3">

          <FileText
            size={22}
            className="text-emerald-400"
          />

          <h2 className="text-xl font-bold text-white">
            Uploaded Files
          </h2>

        </div>

        <div
          className="
            mt-6
            rounded-2xl
            border
            border-dashed
            border-slate-700
            p-8
            text-center
          "
        >

          <FileText
            size={40}
            className="mx-auto text-slate-500"
          />

          <p className="mt-4 text-slate-400">
            No documents uploaded.
          </p>

        </div>

      </div>

    </motion.div>
  );
}

function Stat({
  icon: Icon,
  title,
  value,
  color,
}) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">

        <Icon
          size={20}
          className={color}
        />

        <span className="text-slate-400">
          {title}
        </span>

      </div>

      <span className="text-lg font-bold text-white">
        {value}
      </span>

    </div>
  );
}