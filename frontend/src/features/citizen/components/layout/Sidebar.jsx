import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Search,
  History,
  Bell,
  Bot,
  User,
  Settings,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import SidebarSection from "./SidebarSection";
import UserProfileCard from "./UserProfileCard";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        sticky
        top-0
        h-screen
        border-r
        border-white/10
        bg-slate-950
        transition-all
        duration-300
        ${collapsed ? "w-24" : "w-80"}
      `}
    >
      <div className="flex h-full flex-col">

        {/* Logo */}

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <Link
            to="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">

              <ShieldCheck
                size={26}
                className="text-white"
              />

            </div>

            {!collapsed && (
              <div>

                <h2 className="text-xl font-black text-white">
                  CitizenConnect
                </h2>

                <p className="text-xs text-slate-400">
                  AI Citizen Platform
                </p>

              </div>
            )}
          </Link>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-xl bg-slate-900 p-2 transition hover:bg-slate-800"
          >
            {collapsed ? (
              <Menu className="text-white" size={20} />
            ) : (
              <X className="text-white" size={20} />
            )}
          </button>

        </div>

        {/* Navigation */}

        <div className="flex-1 overflow-y-auto p-5">

          <SidebarSection
            title="Main"
            collapsed={collapsed}
          >

            <SidebarItem
              to="/dashboard"
              icon={LayoutDashboard}
              label="Dashboard"
              collapsed={collapsed}
            />

            <SidebarItem
              to="/dashboard/new-complaint"
              icon={PlusCircle}
              label="New Complaint"
              collapsed={collapsed}
            />

            <SidebarItem
              to="/dashboard/track"
              icon={Search}
              label="Track Complaint"
              collapsed={collapsed}
            />

            <SidebarItem
              to="/dashboard/history"
              icon={History}
              label="Complaint History"
              collapsed={collapsed}
            />

          </SidebarSection>

          <SidebarSection
            title="Services"
            collapsed={collapsed}
          >

            <SidebarItem
              to="/dashboard/notifications"
              icon={Bell}
              label="Notifications"
              badge="5"
              collapsed={collapsed}
            />

            <SidebarItem
              to="/dashboard/ai-assistant"
              icon={Bot}
              label="AI Assistant"
              badge="NEW"
              collapsed={collapsed}
            />

          </SidebarSection>

          <SidebarSection
            title="Account"
            collapsed={collapsed}
          >

            <SidebarItem
              to="/dashboard/profile"
              icon={User}
              label="Profile"
              collapsed={collapsed}
            />

            <SidebarItem
              to="/dashboard/settings"
              icon={Settings}
              label="Settings"
              collapsed={collapsed}
            />

          </SidebarSection>

        </div>

        {/* User Profile */}

        {!collapsed && (
          <div className="p-5">
            <UserProfileCard />
          </div>
        )}

      </div>
    </aside>
  );
}