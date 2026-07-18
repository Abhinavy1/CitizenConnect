import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { month: "Jan", complaints: 42 },
  { month: "Feb", complaints: 58 },
  { month: "Mar", complaints: 36 },
  { month: "Apr", complaints: 65 },
  { month: "May", complaints: 82 },
  { month: "Jun", complaints: 71 },
  { month: "Jul", complaints: 93 },
];

const ComplaintChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Complaint Trend
        </h2>

        <p className="text-sm text-slate-500">
          Monthly complaint registrations
        </p>
      </div>

      <ResponsiveContainer width="100%" height={330}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="complaints" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="complaints"
            stroke="#10b981"
            strokeWidth={3}
            fill="url(#complaints)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ComplaintChart;