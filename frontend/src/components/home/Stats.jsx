import { motion } from "framer-motion";
import {
  Users,
  FileText,
  CheckCircle2,
  Building2,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "20,000+",
    label: "Registered Citizens",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: FileText,
    value: "50,000+",
    label: "Complaints Submitted",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: CheckCircle2,
    value: "98%",
    label: "Resolution Rate",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Building2,
    value: "25+",
    label: "Government Departments",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

function Stats() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Trusted Across Communities
          </h2>

          <p className="mt-5 text-gray-500 text-lg">
            Delivering transparent and efficient complaint resolution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.bg}`}
                >
                  <Icon
                    className={item.color}
                    size={30}
                  />
                </div>

                <h3 className="mt-8 text-5xl font-black text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-4 text-gray-500">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;