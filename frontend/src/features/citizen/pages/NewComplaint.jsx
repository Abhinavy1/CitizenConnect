import { PlusCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import DashboardLayout from "../components/layout/DashboardLayout";
import ComplaintWizard from "../components/complaint/ComplaintWizard";

export default function NewComplaint() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* ================= Header ================= */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-r
            from-slate-900
            via-slate-900
            to-cyan-950/40
            p-10
            shadow-2xl
          "
        >

          {/* Breadcrumb */}

          <div className="mb-5 flex items-center gap-2 text-sm text-slate-400">

            <span>Dashboard</span>

            <ChevronRight size={16} />

            <span className="text-cyan-400">

              New Complaint

            </span>

          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-4 flex items-center gap-4">

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-cyan-500
                    to-blue-600
                  "
                >

                  <PlusCircle
                    size={34}
                    className="text-white"
                  />

                </div>

                <div>

                  <h1 className="text-4xl font-black text-white">

                    Create New Complaint

                  </h1>

                  <p className="mt-2 text-slate-400">

                    Submit your complaint using our AI-powered complaint wizard.

                  </p>

                </div>

              </div>

            </div>

            <div
              className="
                rounded-2xl
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-6
                py-5
              "
            >

              <p className="text-sm text-slate-300">

                Average Resolution

              </p>

              <h2 className="mt-2 text-3xl font-black text-cyan-400">

                48 Hours

              </h2>

            </div>

          </div>

        </motion.div>

        {/* ================= Wizard ================= */}

        <ComplaintWizard />

      </div>

    </DashboardLayout>
  );
}