import { motion } from "framer-motion";
import {
  Camera,
  BadgeCheck,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Star,
  Award,
} from "lucide-react";

export default function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const profile = {
    name: user
      ? `${user.firstName} ${user.lastName}`
      : "Citizen",

    email: user?.email || "Not Available",

    phone: user?.phone || "Not Available",

    address: user?.address || "Address Not Added",

    aadhaar: user?.aadhaar || "Not Available",

    level:
      user?.role === "citizen"
        ? "Verified Citizen"
        : user?.role || "Verified Citizen",

    reputation: "5.0 / 5.0",
  };

  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-xl"
    >
      {/* Avatar */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div
            className="
              flex
              h-36
              w-36
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              text-5xl
              font-black
              text-white
              shadow-xl
            "
          >
            {initials}
          </div>

          <button
            className="
              absolute
              bottom-2
              right-2
              rounded-full
              bg-cyan-500
              p-3
              shadow-lg
              transition
              hover:scale-110
            "
          >
            <Camera
              size={18}
              className="text-white"
            />
          </button>
        </div>

        <h2 className="mt-6 text-3xl font-black text-white">
          {profile.name}
        </h2>

        <div
          className="
            mt-3
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-emerald-500/10
            px-4
            py-2
            text-emerald-400
          "
        >
          <BadgeCheck size={18} />
          <span>{profile.level}</span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-10 space-y-5">
        <InfoRow
          icon={Mail}
          label="Email"
          value={profile.email}
        />

        <InfoRow
          icon={Phone}
          label="Phone"
          value={profile.phone}
        />

        <InfoRow
          icon={MapPin}
          label="Address"
          value={profile.address}
        />

        <InfoRow
          icon={CreditCard}
          label="Aadhaar"
          value={profile.aadhaar}
        />

        <InfoRow
          icon={Award}
          label="Citizen Level"
          value={profile.level}
        />

        <InfoRow
          icon={Star}
          label="Reputation"
          value={profile.reputation}
        />
      </div>
    </motion.div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        bg-slate-950
        p-4
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

      <span className="font-semibold text-white">
        {value}
      </span>
    </div>
  );
}