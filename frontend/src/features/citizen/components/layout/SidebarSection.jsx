import { motion } from "framer-motion";

export default function SidebarSection({
  title,
  children,
  collapsed = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="mb-8"
    >
      {!collapsed && (
        <h3
          className="
            mb-4
            px-4
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-slate-500
          "
        >
          {title}
        </h3>
      )}

      <div className="space-y-1">

        {children}

      </div>
    </motion.div>
  );
}