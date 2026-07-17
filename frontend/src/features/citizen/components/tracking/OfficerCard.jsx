import { motion } from "framer-motion";
import {
  User,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Star,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";

export default function OfficerCard() {
  // Mock data
  // Replace with API later

  const officer = {
    name: "Rajesh Kumar",
    badge: "OFC-1045",
    department: "Municipal Corporation",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@citizenconnect.gov.in",
    rating: 4.8,
    status: "On Site Inspection",
    location: "Jalandhar, Punjab",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-8
        shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-center gap-5">

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
          "
        >
          <User
            size={48}
            className="text-white"
          />
        </div>

        <div className="flex-1">

          <div className="flex items-center gap-2">

            <h2 className="text-2xl font-black text-white">
              {officer.name}
            </h2>

            <BadgeCheck
              size={22}
              className="text-emerald-400"
            />

          </div>

          <p className="mt-2 text-slate-400">
            Assigned Officer
          </p>

          <div className="mt-4 flex items-center gap-2">

            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold text-yellow-400">
              {officer.rating}
            </span>

            <span className="text-slate-500">
              Officer Rating
            </span>

          </div>

        </div>

      </div>

      {/* Details */}

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-4">

          <ShieldCheck
            size={20}
            className="text-cyan-400"
          />

          <div>

            <p className="text-sm text-slate-500">
              Badge Number
            </p>

            <p className="font-semibold text-white">
              {officer.badge}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <MapPin
            size={20}
            className="text-cyan-400"
          />

          <div>

            <p className="text-sm text-slate-500">
              Department
            </p>

            <p className="font-semibold text-white">
              {officer.department}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <Phone
            size={20}
            className="text-cyan-400"
          />

          <div>

            <p className="text-sm text-slate-500">
              Phone
            </p>

            <p className="font-semibold text-white">
              {officer.phone}
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <Mail
            size={20}
            className="text-cyan-400"
          />

          <div>

            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="font-semibold text-white break-all">
              {officer.email}
            </p>

          </div>

        </div>

      </div>

      {/* Status */}

      <div
        className="
          mt-8
          rounded-2xl
          border
          border-emerald-500/20
          bg-emerald-500/10
          p-5
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-400">
              Current Status
            </p>

            <h3 className="mt-2 text-xl font-bold text-emerald-400">
              {officer.status}
            </h3>

          </div>

          <div
            className="
              h-4
              w-4
              rounded-full
              bg-emerald-500
              animate-pulse
            "
          />

        </div>

      </div>

      {/* Location */}

      <div
        className="
          mt-6
          rounded-2xl
          bg-slate-950
          p-5
        "
      >

        <p className="text-sm text-slate-500">
          Current Location
        </p>

        <p className="mt-2 text-white">
          {officer.location}
        </p>

      </div>

      {/* Buttons */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <button
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-slate-800
            py-4
            font-semibold
            text-white
            transition
            hover:border-cyan-500
          "
        >

          <Phone size={20} />

          Call

        </button>

        <button
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
          "
        >

          <MessageCircle size={20} />

          Message

        </button>

      </div>
    </motion.div>
  );
}