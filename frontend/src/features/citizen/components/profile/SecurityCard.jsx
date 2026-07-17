import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Smartphone,
  Monitor,
  LogOut,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

const securityItems = [
  {
    title: "Change Password",
    description: "Update your account password regularly.",
    icon: Lock,
    color: "text-cyan-400",
  },
  {
    title: "Two-Factor Authentication",
    description: "Enable 2FA for enhanced account protection.",
    icon: Smartphone,
    color: "text-emerald-400",
  },
  {
    title: "Login Devices",
    description: "View and manage devices currently signed in.",
    icon: Monitor,
    color: "text-violet-400",
  },
  {
    title: "Logout From All Devices",
    description: "Sign out from every active session instantly.",
    icon: LogOut,
    color: "text-red-400",
  },
];

export default function SecurityCard() {
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

      <div className="flex items-center gap-5">

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
          "
        >
          <ShieldCheck
            size={32}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-3xl font-black text-white">
            Security Center
          </h2>

          <p className="mt-2 text-slate-400">
            Protect your CitizenConnect account.
          </p>

        </div>

      </div>

      {/* Security Score */}

      <div className="mt-8 rounded-2xl bg-slate-950 p-6">

        <div className="flex items-center justify-between">

          <span className="font-semibold text-white">
            Account Security Score
          </span>

          <span className="text-emerald-400 font-bold">
            92%
          </span>

        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "92%",
            }}
            transition={{
              duration: 1,
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-emerald-500
              to-green-600
            "
          />

        </div>

      </div>

      {/* Options */}

      <div className="mt-8 space-y-4">

        {securityItems.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                bg-slate-950
                p-5
                transition
                hover:bg-slate-800
              "
            >

              <div className="flex items-center gap-4">

                <Icon
                  size={22}
                  className={item.color}
                />

                <div className="text-left">

                  <h3 className="font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.description}
                  </p>

                </div>

              </div>

              <ChevronRight
                size={20}
                className="text-slate-500"
              />

            </button>

          );

        })}

      </div>

      {/* Security Alert */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-yellow-500/20
          bg-yellow-500/10
          p-5
        "
      >

        <div className="flex items-start gap-3">

          <AlertTriangle
            size={22}
            className="mt-1 text-yellow-400"
          />

          <div>

            <h3 className="font-bold text-white">
              Security Recommendation
            </h3>

            <p className="mt-2 leading-7 text-slate-300">
              Enable Two-Factor Authentication to significantly improve
              your account security and protect your personal information.
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}