import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  UserX,
  Clock3,
} from "lucide-react";
import OfficerCard from "./OfficerCard";

const officers = [
  {
    id: "OF-1001",
    name: "Rajesh Kumar",
    department: "Road Maintenance",
    status: "Available",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@gov.in",
    area: "Sector 21",
    rating: 4.9,
    totalCases: 245,
    resolved: 228,
    pending: 17,
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "OF-1002",
    name: "Priya Sharma",
    department: "Water Supply",
    status: "Busy",
    phone: "+91 98765 12345",
    email: "priya.sharma@gov.in",
    area: "Model Town",
    rating: 4.8,
    totalCases: 198,
    resolved: 182,
    pending: 16,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: "OF-1003",
    name: "Amit Verma",
    department: "Sanitation",
    status: "Offline",
    phone: "+91 99887 65432",
    email: "amit.verma@gov.in",
    area: "Civil Lines",
    rating: 4.7,
    totalCases: 214,
    resolved: 196,
    pending: 18,
    avatar: "https://i.pravatar.cc/150?img=15",
  },
];

const OfficerStatus = () => {
  const available = officers.filter(
    (o) => o.status === "Available"
  ).length;

  const busy = officers.filter(
    (o) => o.status === "Busy"
  ).length;

  const offline = officers.filter(
    (o) => o.status === "Offline"
  ).length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-emerald-100 p-3">
          <Users className="h-7 w-7 text-emerald-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Officer Status
          </h2>

          <p className="text-sm text-slate-500">
            Live availability of government officers
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-emerald-50 p-5">
          <div className="flex items-center gap-3">
            <UserCheck className="h-8 w-8 text-emerald-600" />
            <div>
              <h3 className="text-2xl font-bold text-emerald-600">
                {available}
              </h3>
              <p className="text-sm text-slate-600">
                Available
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-amber-50 p-5">
          <div className="flex items-center gap-3">
            <Clock3 className="h-8 w-8 text-amber-600" />
            <div>
              <h3 className="text-2xl font-bold text-amber-600">
                {busy}
              </h3>
              <p className="text-sm text-slate-600">
                Busy
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-red-50 p-5">
          <div className="flex items-center gap-3">
            <UserX className="h-8 w-8 text-red-600" />
            <div>
              <h3 className="text-2xl font-bold text-red-600">
                {offline}
              </h3>
              <p className="text-sm text-slate-600">
                Offline
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Officer Cards */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {officers.map((officer) => (
          <OfficerCard
            key={officer.id}
            officer={officer}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default OfficerStatus;