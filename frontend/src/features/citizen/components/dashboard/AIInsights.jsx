import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Brain,
} from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Resolution Rate Increased",
    description: "Complaint resolution improved by 18% compared to last month.",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    icon: AlertTriangle,
    title: "High Priority Alert",
    description: "12 critical complaints require immediate attention today.",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: Clock,
    title: "Average Response Time",
    description: "Current average first response time is 2.4 hours.",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: CheckCircle2,
    title: "Citizen Satisfaction",
    description: "Overall satisfaction score has reached 94%.",
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
];

const AIInsights = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-3">
          <Brain className="h-6 w-6 text-white" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            AI Insights
          </h2>

          <p className="text-sm text-slate-500">
            Intelligent analytics generated from complaint data
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {insights.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 transition hover:shadow-md"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon className={`h-7 w-7 ${item.color}`} />
              </div>

              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-500" />

                  <h3 className="font-semibold text-slate-800">
                    {item.title}
                  </h3>
                </div>

                <p className="leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default AIInsights;