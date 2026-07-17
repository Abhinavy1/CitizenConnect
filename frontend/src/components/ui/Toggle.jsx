import { motion } from "framer-motion";

function Toggle({
  checked = false,
  onChange,
  disabled = false,
  label,
  description,
  className = "",
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 ${className}`}
    >
      {(label || description) && (
        <div>
          {label && (
            <h4 className="text-white font-medium">
              {label}
            </h4>
          )}

          {description && (
            <p className="text-sm text-slate-400 mt-1">
              {description}
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
        className={`
          relative
          w-14
          h-8
          rounded-full
          transition-all
          duration-300
          ${
            checked
              ? "bg-emerald-500"
              : "bg-slate-700"
          }
          ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }
        `}
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
          className={`
            absolute
            top-1
            left-1
            w-6
            h-6
            rounded-full
            bg-white
            shadow-md
          `}
          animate={{
            x: checked ? 24 : 0,
          }}
        />
      </button>
    </div>
  );
}

export default Toggle;