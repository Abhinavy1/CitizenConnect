import { motion } from "framer-motion";

import DashboardLayout from "../components/layout/DashboardLayout";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileCard from "../components/profile/ProfileCard";
import PersonalInfo from "../components/profile/PersonalInfo";
import CitizenStats from "../components/profile/CitizenStats";
import AchievementCard from "../components/profile/AchievementCard";
import ActivityTimeline from "../components/profile/ActivityTimeline";
import SecurityCard from "../components/profile/SecurityCard";

export default function Profile() {

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

        {/* ======================================== */}

        {/* Header */}

        {/* ======================================== */}

        <ProfileHeader />

        {/* ======================================== */}

        {/* Main Grid */}

        {/* ======================================== */}

        <div className="grid gap-8 xl:grid-cols-3">

          {/* Left Sidebar */}

          <div className="space-y-8">

            <ProfileCard />

            <CitizenStats />

          </div>

          {/* Right Content */}

          <div className="space-y-8 xl:col-span-2">

            <PersonalInfo />

            <AchievementCard />
                        <ActivityTimeline />

            <SecurityCard />

          </div>

        </div>

      </motion.div>

    </DashboardLayout>

  );

}