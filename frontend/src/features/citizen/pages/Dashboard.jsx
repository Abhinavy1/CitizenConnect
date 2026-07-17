import DashboardLayout from "../components/layout/DashboardLayout";

import StatsGrid from "../components/stats/StatsGrid";
import ComplaintChart from "../components/charts/ComplaintChart";
import ActivityTimeline from "../components/activity/ActivityTimeline";
import QuickActions from "../components/actions/QuickActions";
import OfficerStatus from "../components/officer/OfficerStatus";
import AIInsights from "../components/ai/AIInsights";
import RecentComplaints from "../components/complaints/RecentComplaints";

export default function Dashboard() {
  return (
    <DashboardLayout>

      {/* ========================= */}
      {/* Statistics */}
      {/* ========================= */}

      <StatsGrid />

      {/* ========================= */}
      {/* Analytics */}
      {/* ========================= */}

      <div className="mt-8 grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <ComplaintChart />

        </div>

        <div>

          <ActivityTimeline />

        </div>

      </div>

      {/* ========================= */}
      {/* Quick Actions + Officers */}
      {/* ========================= */}

      <div className="mt-8 grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <QuickActions />

        </div>

        <div>

          <OfficerStatus />

        </div>

      </div>

      {/* ========================= */}
      {/* AI */}
      {/* ========================= */}

      <AIInsights />

      {/* ========================= */}
      {/* Recent Complaints */}
      {/* ========================= */}

      <RecentComplaints />

    </DashboardLayout>
  );
}