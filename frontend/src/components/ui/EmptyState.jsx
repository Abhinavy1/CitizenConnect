import { motion } from "framer-motion";
import { Inbox } from "lucide-react";
import Button from "./Button";

function EmptyState({
  icon,
  title = "No Data Found",
  description = "There is nothing to display here.",
  actionText,
  onAction,
  className = "",
}) {
  const Icon = icon || Inbox;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`
        flex
        flex-col
        items-center
        justify-center
        text-center
        rounded-3xl
        border
        border-slate-700
        bg-slate-900/60
        backdrop-blur-xl
        p-12
        ${className}
      `}
    >
      {/* Icon */}

      <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
        <Icon
          size={42}
          className="text-emerald-400"
        />
      </div>

      {/* Title */}

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      {/* Description */}

      <p className="mt-4 max-w-md text-slate-400 leading-7">
        {description}
      </p>

      {/* Action */}

      {actionText && (
        <Button
          className="mt-8"
          onClick={onAction}
        >
          {actionText}
        </Button>
      )}
    </motion.div>
  );
}

export default EmptyState;