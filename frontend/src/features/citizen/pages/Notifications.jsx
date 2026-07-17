import { motion } from "framer-motion";

import DashboardLayout from "../components/layout/DashboardLayout";

import NotificationHeader from "../components/notifications/NotificationHeader";
import NotificationStats from "../components/notifications/NotificationStats";
import NotificationFilters from "../components/notifications/NotificationFilters";
import NotificationList from "../components/notifications/NotificationList";
import EmptyNotifications from "../components/notifications/EmptyNotifications";

export default function Notifications() {

  // Replace with backend data later

  const hasNotifications = true;

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

        {/* =============================== */}

        {/* Header */}

        {/* =============================== */}

        <NotificationHeader />

        {/* =============================== */}

        {/* Statistics */}

        {/* =============================== */}

        <NotificationStats />

        {/* =============================== */}

        {/* Filters */}

        {/* =============================== */}

        <NotificationFilters />

        {/* =============================== */}

        {/* Notification List */}

        {/* =============================== */}

        {hasNotifications ? (

          <NotificationList />
                  ) : (

          <EmptyNotifications />

        )}

      </motion.div>

    </DashboardLayout>

  );

}