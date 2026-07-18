import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Resolved", value: 194 },
  { name: "Pending", value: 36 },
  { name: "In Progress", value: 18 },
];

const COLORS = ["#10b981", "#f59e0b", "#3b82f6"];

const ComplaintPieChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Complaint Distribution
        </h2>

        <p className="text-sm text-slate-500">
          Current complaint status overview
        </p>
      </div>

      <ResponsiveContainer width="100%" height={330}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={5}
            label={({ percent }) =>
              `${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            height={36}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ComplaintPieChart;