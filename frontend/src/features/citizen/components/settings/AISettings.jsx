import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  FileText,
  Sparkles,
  MapPin,
  Languages,
  SlidersHorizontal,
} from "lucide-react";

export default function AISettings() {
  const [settings, setSettings] = useState({
    aiEnabled: true,
    complaintDrafting: true,
    smartSuggestions: true,
    locationSuggestions: true,
    documentSummary: true,
    language: "English",
    responseStyle: "Detailed",
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
          AI Preferences
        </h2>

        <p className="mt-2 text-slate-400">
          Customize how CitizenConnect AI assists you.
        </p>

      </div>

      {/* Toggle Options */}

      <div className="space-y-5">

        <SettingRow
          icon={Bot}
          title="Enable AI Assistant"
          description="Turn AI Assistant on or off."
          enabled={settings.aiEnabled}
          onToggle={() => toggle("aiEnabled")}
        />

        <SettingRow
          icon={FileText}
          title="AI Complaint Drafting"
          description="Allow AI to generate complaint descriptions."
          enabled={settings.complaintDrafting}
          onToggle={() => toggle("complaintDrafting")}
        />

        <SettingRow
          icon={Sparkles}
          title="Smart Recommendations"
          description="Receive personalized AI recommendations."
          enabled={settings.smartSuggestions}
          onToggle={() => toggle("smartSuggestions")}
        />

        <SettingRow
          icon={MapPin}
          title="Location-Aware Suggestions"
          description="Use your location for better AI responses."
          enabled={settings.locationSuggestions}
          onToggle={() => toggle("locationSuggestions")}
        />

        <SettingRow
          icon={FileText}
          title="Document Summarization"
          description="Allow AI to summarize uploaded documents."
          enabled={settings.documentSummary}
          onToggle={() => toggle("documentSummary")}
        />

      </div>

      {/* Language */}

      <div className="mt-8">

        <label className="mb-3 flex items-center gap-2 text-white">

          <Languages size={20} />

          AI Language

        </label>

        <select
          value={settings.language}
          onChange={(e) =>
            setSettings({
              ...settings,
              language: e.target.value,
            })
          }
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
          <option>English</option>
          <option>Hindi</option>
          <option>Punjabi</option>
        </select>

      </div>

      {/* Response Style */}

      <div className="mt-8">

        <label className="mb-3 flex items-center gap-2 text-white">

          <SlidersHorizontal size={20} />

          AI Response Style

        </label>

        <select
          value={settings.responseStyle}
          onChange={(e) =>
            setSettings({
              ...settings,
              responseStyle: e.target.value,
            })
          }
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
          <option>Detailed</option>
          <option>Balanced</option>
          <option>Concise</option>
        </select>

      </div>

      {/* Footer */}

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
          AI Notice
        </h3>

        <p className="mt-2 leading-7 text-slate-300">
          CitizenConnect AI is designed to assist with complaint drafting,
          government service guidance, and civic information. AI suggestions
          are advisory and should be reviewed before submission.
        </p>
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