import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Smartphone,
  Laptop,
  LogOut,
  TriangleAlert,
} from "lucide-react";

export default function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(true);

  const sessions = [
    {
      device: "Windows PC",
      browser: "Chrome",
      location: "Jalandhar, India",
      active: true,
    },
    {
      device: "Android Phone",
      browser: "Chrome Mobile",
      location: "Jalandhar, India",
      active: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
          Security Settings
        </h2>

        <p className="mt-2 text-slate-400">
          Keep your CitizenConnect account secure.
        </p>

      </div>

      {/* Security Score */}

      <div
        className="
          rounded-2xl
          bg-slate-950
          p-6
        "
      >

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <ShieldCheck
              size={28}
              className="text-emerald-400"
            />

            <span className="text-lg font-bold text-white">
              Security Score
            </span>

          </div>

          <span className="text-2xl font-black text-emerald-400">
            92%
          </span>

        </div>

        <div className="mt-5 h-3 rounded-full bg-slate-800">

          <div
            className="
              h-full
              w-[92%]
              rounded-full
              bg-gradient-to-r
              from-emerald-500
              to-green-600
            "
          />

        </div>

      </div>

      {/* Change Password */}

      <div className="mt-8 rounded-2xl bg-slate-950 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Lock
              size={22}
              className="text-cyan-400"
            />

            <div>

              <h3 className="font-bold text-white">
                Change Password
              </h3>

              <p className="text-sm text-slate-400">
                Update your password regularly.
              </p>

            </div>

          </div>

          <button
            className="
              rounded-xl
              bg-cyan-500
              px-5
              py-2
              text-white
              transition
              hover:bg-cyan-600
            "
          >
            Change
          </button>

        </div>

      </div>

      {/* Two Factor */}

      <div className="mt-6 rounded-2xl bg-slate-950 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Smartphone
              size={22}
              className="text-violet-400"
            />

            <div>

              <h3 className="font-bold text-white">
                Two-Factor Authentication
              </h3>

              <p className="text-sm text-slate-400">
                Add an extra layer of security.
              </p>

            </div>

          </div>

          <button
            onClick={() => setTwoFactor(!twoFactor)}
            className={`
              relative
              h-8
              w-16
              rounded-full
              transition

              ${
                twoFactor
                  ? "bg-cyan-500"
                  : "bg-slate-700"
              }
            `}
          >

            <span
              className={`
                absolute
                top-1
                h-6
                w-6
                rounded-full
                bg-white
                transition

                ${
                  twoFactor
                    ? "left-9"
                    : "left-1"
                }
              `}
            />

          </button>

        </div>

      </div>

      {/* Active Sessions */}

      <div className="mt-8">

        <h3 className="mb-5 text-xl font-bold text-white">
          Active Sessions
        </h3>

        <div className="space-y-4">

          {sessions.map((session) => (

            <div
              key={session.device}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-slate-950
                p-5
              "
            >

              <div className="flex items-center gap-4">

                <Laptop
                  size={22}
                  className="text-cyan-400"
                />

                <div>

                  <h4 className="font-bold text-white">
                    {session.device}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {session.browser} • {session.location}
                  </p>

                </div>

              </div>

              <span
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-semibold

                  ${
                    session.active
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-slate-800 text-slate-400"
                  }
                `}
              >
                {session.active ? "Current" : "Previous"}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Footer Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <button
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-red-500
            px-6
            py-4
            font-semibold
            text-white
            transition
            hover:bg-red-600
          "
        >
          <LogOut size={20} />

          Logout All Devices

        </button>

        <button
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-yellow-500
            px-6
            py-4
            text-yellow-400
            transition
            hover:bg-yellow-500
            hover:text-black
          "
        >
          <TriangleAlert size={20} />

          View Security Alerts

        </button>

      </div>

    </motion.div>
  );
}