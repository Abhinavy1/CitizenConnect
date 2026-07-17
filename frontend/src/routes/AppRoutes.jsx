import { Routes, Route, Navigate } from "react-router-dom";

// Landing Page
import Home from "../pages/Home";

// Authentication
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import ResetPassword from "../features/auth/pages/ResetPassword";

// Citizen Pages
import Dashboard from "../features/citizen/pages/Dashboard";
import NewComplaint from "../features/citizen/pages/NewComplaint";
import TrackComplaint from "../features/citizen/pages/TrackComplaint";
import ComplaintHistory from "../features/citizen/pages/ComplaintHistory";
import Notifications from "../features/citizen/pages/Notifications";
import AIAssistant from "../features/citizen/pages/AIAssistant";
import Profile from "../features/citizen/pages/Profile";
import Settings from "../features/citizen/pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ========================= */}
      {/* Public Routes */}
      {/* ========================= */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />

      {/* ========================= */}
      {/* Citizen Dashboard */}
      {/* ========================= */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/dashboard/new-complaint"
        element={<NewComplaint />}
      />

      <Route
        path="/dashboard/track"
        element={<TrackComplaint />}
      />

      <Route
        path="/dashboard/history"
        element={<ComplaintHistory />}
      />

      <Route
        path="/dashboard/notifications"
        element={<Notifications />}
      />

      <Route
        path="/dashboard/ai-assistant"
        element={<AIAssistant />}
      />

      <Route
        path="/dashboard/profile"
        element={<Profile />}
      />

      <Route
        path="/dashboard/settings"
        element={<Settings />}
      />

      {/* ========================= */}
      {/* Redirect */}
      {/* ========================= */}

      <Route
        path="/home"
        element={<Navigate to="/" replace />}
      />

      {/* ========================= */}
      {/* 404 */}
      {/* ========================= */}

      <Route
        path="*"
        element={
          <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-center text-white">
            <h1 className="text-8xl font-black text-cyan-500">
              404
            </h1>

            <p className="mt-4 text-xl text-slate-400">
              The page you're looking for doesn't exist.
            </p>

            <a
              href="/"
              className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition hover:bg-cyan-400"
            >
              Go Home
            </a>
          </div>
        }
      />
    </Routes>
  );
}