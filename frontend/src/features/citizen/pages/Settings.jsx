import { motion } from "framer-motion";

import DashboardLayout from "../components/layout/DashboardLayout";

import SettingsHeader from "../components/settings/SettingsHeader";
import AccountSettings from "../components/settings/AccountSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import PrivacySettings from "../components/settings/PrivacySettings";
import AISettings from "../components/settings/AISettings";
import DataSettings from "../components/settings/DataSettings";

export default function Settings() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="space-y-8"
      >
        {/* Header */}

        <SettingsHeader />

        {/* Settings Grid */}

        <div className="grid gap-8 xl:grid-cols-3">
          {/* Left Column */}

          <div className="space-y-8">
            <AccountSettings />

            <AppearanceSettings />

            <AISettings />
          </div>

          {/* Middle Column */}

          <div className="space-y-8">
            <NotificationSettings />

            <PrivacySettings />
          </div>

          {/* Right Column */}

          <div className="space-y-8">
            <SecuritySettings />

            <DataSettings />
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}