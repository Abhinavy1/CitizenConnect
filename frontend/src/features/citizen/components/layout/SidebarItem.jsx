import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function SidebarItem({
  to,
  icon: Icon,
  label,
  badge,
  collapsed = false,
}) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <motion.div
          whileHover={{
            x: 6,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`
            group
            mb-2
            flex
            items-center
            justify-between
            rounded-2xl
            px-4
            py-3
            transition-all
            duration-300
            ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }
          `}
        >
          <div className="flex items-center gap-4">

            <Icon
              size={22}
              className={`
                transition-all
                duration-300
                ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 group-hover:text-cyan-400"
                }
              `}
            />

            {!collapsed && (
              <span className="font-semibold">
                {label}
              </span>
            )}

          </div>

          {!collapsed && (

            <div className="flex items-center gap-2">

              {badge && (
                <span
                  className="
                    rounded-full
                    bg-cyan-500/20
                    px-2
                    py-1
                    text-xs
                    font-bold
                    text-cyan-300
                  "
                >
                  {badge}
                </span>
              )}

              <ChevronRight
                size={16}
                className={`
                  transition-transform
                  duration-300
                  ${
                    isActive
                      ? "translate-x-1"
                      : "group-hover:translate-x-1"
                  }
                `}
              />

            </div>

          )}

        </motion.div>
      )}
    </NavLink>
  );
}