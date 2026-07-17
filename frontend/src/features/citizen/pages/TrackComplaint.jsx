import { motion } from "framer-motion";
import DashboardLayout from "../components/layout/DashboardLayout";

import TrackingHeader from "../components/tracking/TrackingHeader";
import ComplaintStatus from "../components/tracking/ComplaintStatus";
import OfficerCard from "../components/tracking/OfficerCard";
import TrackingTimeline from "../components/tracking/TrackingTimeline";
import ComplaintInfoCard from "../components/tracking/ComplaintInfoCard";
import EvidenceGallery from "../components/tracking/EvidenceGallery";
import TrackingMap from "../components/tracking/TrackingMap";
import TrackingAIInsights from "../components/tracking/TrackingAIInsights";

export default function TrackComplaint() {
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

        {/* ================= Header ================= */}

        <TrackingHeader />

        {/* ================= Status + Officer ================= */}

        <div className="grid gap-8 xl:grid-cols-2">

          <ComplaintStatus />

          <OfficerCard />

        </div>

        {/* ================= Timeline ================= */}

        <TrackingTimeline />

        {/* ================= Complaint Info ================= */}

        <ComplaintInfoCard />
            {/* ================= Evidence + Map ================= */}

        <div className="grid gap-8 xl:grid-cols-2">

          <EvidenceGallery />

          <TrackingMap />

        </div>

        {/* ================= AI Insights ================= */}

        <TrackingAIInsights />

      </motion.div>

    </DashboardLayout>
  );
}