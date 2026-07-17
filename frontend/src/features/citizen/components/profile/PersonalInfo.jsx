import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Globe,
  Map,
  Hash,
} from "lucide-react";

export default function PersonalInfo() {
  const profile = {
    fullName: "Abhinav Kumar",
    email: "abhinav@example.com",
    phone: "+91 98765 43210",
    dob: "15 August 2004",
    gender: "Male",
    address: "Model Town",
    city: "Jalandhar",
    state: "Punjab",
    pincode: "144001",
    country: "India",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
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

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black text-white">
            Personal Information
          </h2>

          <p className="mt-2 text-slate-400">
            Your registered personal details.
          </p>

        </div>

        <button
          className="
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:scale-105
          "
        >
          Edit
        </button>

      </div>

      {/* Information Grid */}

      <div className="grid gap-6 md:grid-cols-2">

        <InfoField
          icon={User}
          label="Full Name"
          value={profile.fullName}
        />

        <InfoField
          icon={Mail}
          label="Email Address"
          value={profile.email}
        />

        <InfoField
          icon={Phone}
          label="Mobile Number"
          value={profile.phone}
        />

        <InfoField
          icon={Calendar}
          label="Date of Birth"
          value={profile.dob}
        />

        <InfoField
          icon={User}
          label="Gender"
          value={profile.gender}
        />

        <InfoField
          icon={MapPin}
          label="Address"
          value={profile.address}
        />

        <InfoField
          icon={Map}
          label="City"
          value={profile.city}
        />

        <InfoField
          icon={Globe}
          label="State"
          value={profile.state}
        />

        <InfoField
          icon={Hash}
          label="PIN Code"
          value={profile.pincode}
        />

        <InfoField
          icon={Globe}
          label="Country"
          value={profile.country}
        />

      </div>
    </motion.div>
  );
}

function InfoField({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div
      className="
        rounded-2xl
        bg-slate-950
        p-5
      "
    >
      <div className="flex items-center gap-3">

        <Icon
          size={20}
          className="text-cyan-400"
        />

        <span className="text-slate-400">
          {label}
        </span>

      </div>

      <p className="mt-4 text-lg font-semibold text-white">
        {value}
      </p>

    </div>
  );
}