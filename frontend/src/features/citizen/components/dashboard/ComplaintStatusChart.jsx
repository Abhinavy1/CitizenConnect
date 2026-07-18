import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    department: "Roads",
    resolved: 42,
    pending: 12,
    progress: 8,
  },
  {
    department: "Water",
    resolved: 31,
    pending: 15,
    progress: 10,
  },
  {
    department: "Electricity",
    resolved: 54,
    pending: 8,
    progress: 5,
  },
  {
    department: "Sanitation",
    resolved: 38,
    pending: 11,
    progress: 7,
  },
  {
    department: "Traffic",
    resolved: 26,
    pending: 14,
    progress: 9,
  },
];

const ComplaintStatusChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Department Performance
        </h2>

        <p className="text-sm text-slate-500">
          Complaint status by department
        </p>
      </div>

      <ResponsiveContainer
        width="100%"
        height={340}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="department" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="resolved"
            name="Resolved"
            radius={[6, 6, 0, 0]}
            fill="#10b981"
          />

          <Bar
            dataKey="progress"
            name="In Progress"
            radius={[6, 6, 0, 0]}
            fill="#3b82f6"
          />

          <Bar
            dataKey="pending"
            name="Pending"
            radius={[6, 6, 0, 0]}
            fill="#f59e0b"
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ComplaintStatusChart;