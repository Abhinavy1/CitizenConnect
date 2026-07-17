import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  MapPin,
  BarChart3,
  Bot,
  Camera,
  Mic,
  Shield,
} from "lucide-react";

export default function PrivacySettings() {
  const [settings, setSettings] = useState({
    profileVisibility: true,
    locationSharing: true,
    analytics: false,
    aiUsage: true,
    camera: true,
    microphone: false,
    dataCollection: true,
  });

  const toggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
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
          Privacy Settings
        </h2>

        <p className="mt-2 text-slate-400">
          Control how your information is shared and used.
        </p>

      </div>

      <div className="space-y-5">

        <SettingItem
          icon={Eye}
          title="Profile Visibility"
          description="Allow other departments to view your public profile."
          enabled={settings.profileVisibility}
          onToggle={() => toggle("profileVisibility")}
        />

        <SettingItem
          icon={MapPin}
          title="Location Sharing"
          description="Share your location while creating complaints."
          enabled={settings.locationSharing}
          onToggle={() => toggle("locationSharing")}
        />

        <SettingItem
          icon={BarChart3}
          title="Analytics & Usage Data"
          description="Help improve CitizenConnect with anonymous analytics."
          enabled={settings.analytics}
          onToggle={() => toggle("analytics")}
        />

        <SettingItem
          icon={Bot}
          title="AI Data Usage"
          description="Allow AI to analyze complaint information."
          enabled={settings.aiUsage}
          onToggle={() => toggle("aiUsage")}
        />

        <SettingItem
          icon={Camera}
          title="Camera Permission"
          description="Allow image capture for complaint evidence."
          enabled={settings.camera}
          onToggle={() => toggle("camera")}
        />

        <SettingItem
          icon={Mic}
          title="Microphone Permission"
          description="Allow voice input for AI Assistant."
          enabled={settings.microphone}
          onToggle={() => toggle("microphone")}
        />

        <SettingItem
          icon={Shield}
          title="Data Collection"
          description="Allow secure collection of diagnostic information."
          enabled={settings.dataCollection}
          onToggle={() => toggle("dataCollection")}
        />

      </div>

      {/* Privacy Notice */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-cyan-500/20
          bg-cyan-500/10
          p-5
        "
      >
        <h3 className="font-bold text-white">
          Privacy Notice
        </h3>

        <p className="mt-2 leading-7 text-slate-300">
          CitizenConnect only collects information necessary to process
          complaints, improve AI recommendations, and deliver government
          services. Your personal information is protected according to
          applicable privacy regulations.
        </p>
      </div>
    </motion.div>
  );
}

function SettingItem({
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

      <button
        onClick={onToggle}
        className={`
          relative
          h-8
          w-16
          rounded-full
          transition

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
            transition

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