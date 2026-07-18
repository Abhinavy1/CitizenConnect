import { motion } from "framer-motion";
import {
  Bell,
  BarChart3,
  Home,
  FileText,
  Settings,
  User,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  TrendingUp,
} from "lucide-react";

import FloatingMetric from "./FloatingMetric";
import DashboardCard from "./DashboardCard";

export default function DashboardPreview() {
  return (
    <div className="relative">

      {/* Floating Cards */}

      <FloatingMetric
        title="Complaints"
        value="12,842"
        className="absolute -top-8 -left-12 z-20"
        color="from-cyan-500 to-blue-600"
        icon={<BarChart3 size={24} />}
      />

      <FloatingMetric
        title="Resolution"
        value="98%"
        className="absolute -bottom-6 right-0 z-20"
        color="from-emerald-500 to-green-600"
        icon={<CheckCircle2 size={24} />}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .8,
        }}
        className="overflow-hidden rounded-[34px] border border-white/10 bg-slate-900/70 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl"
      >

        {/* Browser */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <div className="flex gap-2">

            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          <div className="flex items-center gap-5 text-slate-400">

            <Search size={20} />

            <Bell size={20} />

            <User size={20} />

          </div>

        </div>

        {/* Layout */}

        <div className="grid grid-cols-12">

          {/* Sidebar */}

          <div className="col-span-3 border-r border-white/10 bg-[#08111f] p-6">

            <h2 className="text-xl font-bold text-white">

              Dashboard

            </h2>

            <div className="mt-10 space-y-4">

              <SideItem active icon={<Home size={18} />} text="Overview" />

              <SideItem icon={<FileText size={18} />} text="Complaints" />

              <SideItem icon={<BarChart3 size={18} />} text="Analytics" />

              <SideItem icon={<User size={18} />} text="Citizens" />

              <SideItem icon={<Settings size={18} />} text="Settings" />

            </div>

          </div>

          {/* Content */}

          <div className="col-span-9 bg-[#030712] p-6">

            <div className="grid grid-cols-3 gap-5">

              <DashboardCard
                title="Pending"
                value="42"
                change="+8%"
                icon={<Clock3 />}
                color="text-yellow-400"
              />

              <DashboardCard
                title="Resolved"
                value="248"
                change="+24%"
                icon={<CheckCircle2 />}
                color="text-emerald-400"
              />

              <DashboardCard
                title="Urgent"
                value="7"
                change="-2%"
                icon={<AlertTriangle />}
                color="text-red-400"
              />

            </div>

            {/* Chart */}

            <div className="mt-7 rounded-3xl border border-white/10 bg-slate-900/60 p-6">

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-white">

                  Complaint Analytics

                </h3>

                <TrendingUp className="text-cyan-400" />

              </div>

              <div className="mt-10 flex h-52 items-end gap-4">

                {[80,120,95,140,170,150,210].map((height,index)=>(
                  <motion.div
                    key={index}
                    initial={{
                      height:0
                    }}
                    animate={{
                      height
                    }}
                    transition={{
                      delay:index*.08
                    }}
                    className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-600 via-cyan-500 to-cyan-300"
                  />
                ))}

              </div>

            </div>

            {/* Activity */}

            <div className="mt-7 rounded-3xl border border-white/10 bg-slate-900/60 p-6">

              <h3 className="text-white font-semibold">

                Recent Activity

              </h3>

              <div className="mt-6 space-y-5">

                <Activity
                  title="Road Damage Reported"
                  status="Pending"
                />

                <Activity
                  title="Water Leakage Fixed"
                  status="Resolved"
                />

                <Activity
                  title="Street Light Maintenance"
                  status="In Progress"
                />

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

function SideItem({
  icon,
  text,
  active = false,
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
        active
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
          : "text-slate-400 hover:bg-white/5"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Activity({
  title,
  status,
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4 last:border-none">

      <div>

        <h4 className="text-white">

          {title}

        </h4>

        <p className="text-sm text-slate-500">

          Updated 2 mins ago

        </p>

      </div>

      <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">

        {status}

      </span>

    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold">
        Dashboard Preview
      </h2>
    </section>
  );
}