import { useState } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Sun,
  Palette,
  Type,
  LayoutDashboard,
} from "lucide-react";

export default function AppearanceSettings() {
  const [theme, setTheme] = useState("dark");
  const [layout, setLayout] = useState("comfortable");
  const [fontSize, setFontSize] = useState("Medium");
  const [accent, setAccent] = useState("Cyan");

  const colors = [
    "Cyan",
    "Blue",
    "Emerald",
    "Purple",
    "Orange",
    "Rose",
  ];

  return (
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
        duration: 0.4,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-8
        shadow-xl
      "
    >
      {/* Header */}

      <div className="mb-8">

        <h2 className="text-3xl font-black text-white">
          Appearance
        </h2>

        <p className="mt-2 text-slate-400">
          Personalize the look and feel of CitizenConnect.
        </p>

      </div>

      {/* Theme */}

      <div className="mb-8">

        <h3 className="mb-4 text-xl font-bold text-white">
          Theme
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <button
            onClick={() => setTheme("dark")}
            className={`
              rounded-2xl
              border
              p-6
              transition

              ${
                theme === "dark"
                  ? "border-cyan-500 bg-slate-950"
                  : "border-white/10 bg-slate-800"
              }
            `}
          >
            <Moon
              size={34}
              className="mx-auto text-cyan-400"
            />

            <h4 className="mt-4 font-bold text-white">
              Dark Mode
            </h4>

          </button>

          <button
            onClick={() => setTheme("light")}
            className={`
              rounded-2xl
              border
              p-6
              transition

              ${
                theme === "light"
                  ? "border-cyan-500 bg-slate-950"
                  : "border-white/10 bg-slate-800"
              }
            `}
          >
            <Sun
              size={34}
              className="mx-auto text-yellow-400"
            />

            <h4 className="mt-4 font-bold text-white">
              Light Mode
            </h4>

          </button>

        </div>

      </div>

      {/* Accent Color */}

      <div className="mb-8">

        <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">

          <Palette size={22} />

          Accent Color

        </h3>

        <div className="flex flex-wrap gap-3">

          {colors.map((color) => (

            <button
              key={color}
              onClick={() => setAccent(color)}
              className={`
                rounded-full
                border
                px-5
                py-2
                font-medium
                transition

                ${
                  accent === color
                    ? "border-cyan-500 bg-cyan-500 text-white"
                    : "border-white/10 bg-slate-800 text-slate-300"
                }
              `}
            >
              {color}
            </button>

          ))}

        </div>

      </div>

      {/* Font Size */}

      <div className="mb-8">

        <label className="mb-3 flex items-center gap-2 text-white">

          <Type size={20} />

          Font Size

        </label>

        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-950
            p-4
            text-white
            outline-none
          "
        >
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

      </div>

      {/* Layout */}

      <div>

        <label className="mb-3 flex items-center gap-2 text-white">

          <LayoutDashboard size={20} />

          Layout Density

        </label>

        <select
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-950
            p-4
            text-white
            outline-none
          "
        >
          <option value="comfortable">
            Comfortable
          </option>

          <option value="compact">
            Compact
          </option>

        </select>

      </div>

      {/* Preview */}

      <div
        className="
          mt-10
          rounded-2xl
          border
          border-white/10
          bg-slate-950
          p-6
        "
      >

        <h3 className="font-bold text-white">
          Live Preview
        </h3>

        <div className="mt-5 rounded-xl bg-slate-800 p-5">

          <h4 className="text-xl font-bold text-white">
            CitizenConnect
          </h4>

          <p className="mt-2 text-slate-400">
            Theme: {theme} • Accent: {accent} • Font: {fontSize}
          </p>

        </div>

      </div>

    </motion.div>
  );
}