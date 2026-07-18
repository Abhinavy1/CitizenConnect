import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
  Star,
  ArrowRight,
} from "lucide-react";

const statusStyles = {
  Available: "bg-emerald-100 text-emerald-700",
  Busy: "bg-amber-100 text-amber-700",
  Offline: "bg-red-100 text-red-700",
};

const OfficerCard = ({ officer }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
    >
      {/* Top */}
      <div className="flex items-center gap-4">
        <img
          src={officer.avatar}
          alt={officer.name}
          className="h-16 w-16 rounded-full object-cover ring-4 ring-emerald-100"
        />

        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800">
            {officer.name}
          </h3>

          <p className="text-sm text-slate-500">
            {officer.department}
          </p>

          <span
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
              statusStyles[officer.status]
            }`}
          >
            {officer.status}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-3 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <BadgeCheck className="h-5 w-5 text-emerald-600" />
          Officer ID : {officer.id}
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-blue-600" />
          {officer.phone}
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-violet-600" />
          {officer.email}
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-red-600" />
          {officer.area}
        </div>

        <div className="flex items-center gap-3">
          <Star className="h-5 w-5 text-amber-500" />
          Rating {officer.rating}/5
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-slate-100 p-3 text-center">
          <p className="text-xl font-bold text-slate-800">
            {officer.totalCases}
          </p>
          <p className="text-xs text-slate-500">
            Cases
          </p>
        </div>

        <div className="rounded-xl bg-emerald-50 p-3 text-center">
          <p className="text-xl font-bold text-emerald-600">
            {officer.resolved}
          </p>
          <p className="text-xs text-slate-500">
            Resolved
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-3 text-center">
          <p className="text-xl font-bold text-blue-600">
            {officer.pending}
          </p>
          <p className="text-xs text-slate-500">
            Pending
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">
        View Profile
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
};

export default OfficerCard;