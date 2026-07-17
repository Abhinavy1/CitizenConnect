import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from "lucide-react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardStatCard from "./DashboardStatCard";
import DashboardChart from "./DashboardChart";
import DashboardAIWidget from "./DashboardAIWidget";
import DashboardTable from "./DashboardTable";

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 shadow-[0_30px_100px_rgba(0,0,0,.6)]"
        >
          <DashboardHeader />

          <div className="flex">
            <DashboardSidebar />

            <div className="flex-1 bg-[#0b1220] p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <DashboardStatCard
                  title="Pending"
                  value="24"
                  change="+4 Today"
                  color="text-yellow-400"
                  icon={<Clock3 className="text-yellow-400" />}
                />

                <DashboardStatCard
                  title="Resolved"
                  value="184"
                  change="+18%"
                  color="text-green-400"
                  icon={<CheckCircle2 className="text-green-400" />}
                />

                <DashboardStatCard
                  title="Urgent"
                  value="6"
                  change="Needs Attention"
                  color="text-red-400"
                  icon={<AlertTriangle className="text-red-400" />}
                />
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <DashboardChart />
                </div>

                <DashboardAIWidget />
              </div>

              <div className="mt-8">
                <DashboardTable />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}