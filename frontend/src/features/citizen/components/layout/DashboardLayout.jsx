import { useState } from "react";
import { Bell, Search, Moon, Sun, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex flex-1 flex-col">

        {/* ===================== */}
        {/* Top Navigation */}
        {/* ===================== */}

        <header
          className="
            sticky
            top-0
            z-40
            border-b
            border-white/10
            bg-slate-950/90
            backdrop-blur-xl
          "
        >
          <div className="flex items-center justify-between px-8 py-5">

            {/* Left */}

            <div className="flex items-center gap-4">

              <button className="rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800 lg:hidden">

                <Menu
                  size={20}
                  className="text-white"
                />

              </button>

              <div>

                <h1 className="text-3xl font-black text-white">

                  Citizen Dashboard

                </h1>

                <p className="mt-1 text-slate-400">

                  Welcome back 👋

                </p>

              </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

              {/* Search */}

              <div className="relative hidden md:block">

                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  placeholder="Search complaints..."
                  className="
                    w-72
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-900
                    py-3
                    pl-11
                    pr-5
                    text-white
                    outline-none
                    transition
                    focus:border-cyan-500
                  "
                />

              </div>

              {/* Theme */}

              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() =>
                  setDarkMode(!darkMode)
                }
                className="
                  rounded-2xl
                  bg-slate-900
                  p-3
                  transition
                  hover:bg-slate-800
                "
              >

                {darkMode ? (

                  <Sun
                    size={20}
                    className="text-yellow-400"
                  />

                ) : (

                  <Moon
                    size={20}
                    className="text-white"
                  />

                )}

              </motion.button>

              {/* Notifications */}

              <button
                className="
                  relative
                  rounded-2xl
                  bg-slate-900
                  p-3
                  transition
                  hover:bg-slate-800
                "
              >

                <Bell
                  size={20}
                  className="text-white"
                />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    text-[10px]
                    font-bold
                    text-white
                  "
                >

                  5

                </span>

              </button>

              {/* Avatar */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-500
                  to-blue-600
                  text-lg
                  font-bold
                  text-white
                "
              >

                A

              </div>

            </div>

          </div>

        </header>

        {/* ===================== */}
        {/* Main Page */}
        {/* ===================== */}

        <main className="flex-1 overflow-y-auto p-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
            }}
          >

            {children}

          </motion.div>

        </main>

      </div>

    </div>
  );
}