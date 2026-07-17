import { motion } from "framer-motion";
import { useState } from "react";
import {
  Bell,
  Mail,
  Smartphone,
  AlertTriangle,
  Bot,
  FileCheck,
} from "lucide-react";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    push: true,
    email: true,
    sms: false,
    emergency: true,
    ai: true,
    complaint: true,
  });

  const toggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
          Notification Preferences
        </h2>

        <p className="mt-2 text-slate-400">
          Choose how CitizenConnect should notify you.
        </p>

      </div>

      <div className="space-y-5">

        <SettingRow
          icon={Bell}
          title="Push Notifications"
          description="Receive instant browser notifications."
          enabled={settings.push}
          onToggle={() => toggle("push")}
        />

        <SettingRow
          icon={Mail}
          title="Email Notifications"
          description="Receive complaint updates via email."
          enabled={settings.email}
          onToggle={() => toggle("email")}
        />

        <SettingRow
          icon={Smartphone}
          title="SMS Notifications"
          description="Receive SMS alerts for important updates."
          enabled={settings.sms}
          onToggle={() => toggle("sms")}
        />

        <SettingRow
          icon={AlertTriangle}
          title="Emergency Alerts"
          description="Receive emergency and disaster notifications."
          enabled={settings.emergency}
          onToggle={() => toggle("emergency")}
        />

        <SettingRow
          icon={Bot}
          title="AI Recommendations"
          description="Receive AI-powered suggestions and insights."
          enabled={settings.ai}
          onToggle={() => toggle("ai")}
        />

        <SettingRow
          icon={FileCheck}
          title="Complaint Status Updates"
          description="Receive updates when complaint status changes."
          enabled={settings.complaint}
          onToggle={() => toggle("complaint")}
        />

      </div>
    </motion.div>
  );
}

function SettingRow({
  icon: Icon,
  title,
  description,
  enabled,
  onToggle,
}) {
  return (
    <div
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

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-cyan-500/10
          "
        >
          <Icon
            size={22}
            className="text-cyan-400"
          />
        </div>

        <div>

          <h3 className="font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {description}
          </p>

        </div>

      </div>

      {/* Toggle */}

      <button
        onClick={onToggle}
        className={`
          relative
          h-8
          w-16
          rounded-full
          transition-all

          ${
            enabled
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
            transition-all

            ${
              enabled
                ? "left-9"
                : "left-1"
            }
          `}
        />
      </button>

    </div>
  );
}