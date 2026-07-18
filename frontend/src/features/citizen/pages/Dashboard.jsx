import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import AnalyticsCards from "../components/dashboard/AnalyticsCards";
import DashboardStats from "../components/dashboard/DashboardStats";

import ComplaintChart from "../components/dashboard/ComplaintChart";
import ComplaintPieChart from "../components/dashboard/ComplaintPieChart";
import ComplaintStatusChart from "../components/dashboard/ComplaintStatusChart";

import RecentComplaints from "../components/dashboard/RecentComplaints";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";

import AIInsights from "../components/dashboard/AIInsights";
import GovernmentAnnouncements from "../components/dashboard/GovernmentAnnouncements";

import OfficerStatus from "../components/dashboard/OfficerStatus";
import MapPreview from "../components/dashboard/MapPreview";

import CitizenStats from "../components/dashboard/CitizenStats";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import NewsTicker from "../components/dashboard/NewsTicker";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";

import FloatingHelpButton from "../components/dashboard/FloatingHelpButton";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">
          {/* Header */}
          <DashboardHeader />

          {/* Welcome Banner */}
          <WelcomeBanner />

          {/* Analytics */}
          <AnalyticsCards />

          {/* Statistics */}
          <DashboardStats />

          {/* Charts */}
          <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <ComplaintChart />
            </div>

            <ComplaintPieChart />
          </div>

          {/* Department Performance */}
          <ComplaintStatusChart />

          {/* AI Insights + Weather */}
          <div className="grid gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <AIInsights />
            </div>

            <WeatherWidget />
          </div>

          {/* Recent Complaints */}
          <RecentComplaints />

          {/* Timeline */}
          <ActivityTimeline />

          {/* Officer + Map */}
          <div className="grid gap-6 xl:grid-cols-2">
            <OfficerStatus />
            <MapPreview />
          </div>

          {/* Citizen Statistics */}
          <CitizenStats />

          {/* News */}
          <NewsTicker />

          {/* Government Announcements */}
          <GovernmentAnnouncements />

          {/* Upcoming Events */}
          <UpcomingEvents />

          {/* Floating AI Button */}
          <FloatingHelpButton />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;