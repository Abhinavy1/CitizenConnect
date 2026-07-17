import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Camera,
  Save,
} from "lucide-react";

export default function AccountSettings() {
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

      <div className="mb-8">

        <h2 className="text-3xl font-black text-white">
          Account Settings
        </h2>

        <p className="mt-2 text-slate-400">
          Manage your personal account information.
        </p>

      </div>

      {/* Avatar */}

      <div className="mb-10 flex flex-col items-center">

        <div className="relative">

          <div
            className="
              flex
              h-32
              w-32
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
              text-4xl
              font-black
              text-white
            "
          >
            AK
          </div>

          <button
            className="
              absolute
              bottom-2
              right-2
              rounded-full
              bg-cyan-500
              p-3
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

      </div>

      {/* Form */}

      <div className="grid gap-6 md:grid-cols-2">

        <InputField
          icon={User}
          label="Full Name"
          defaultValue="Abhinav Kumar"
        />

        <InputField
          icon={Mail}
          label="Email"
          defaultValue="abhinav@example.com"
        />

        <InputField
          icon={Phone}
          label="Mobile Number"
          defaultValue="+91 9876543210"
        />

        <InputField
          icon={Globe}
          label="Language"
          defaultValue="English"
        />

        <InputField
          icon={MapPin}
          label="Region"
          defaultValue="Punjab"
        />

        <InputField
          icon={MapPin}
          label="City"
          defaultValue="Jalandhar"
        />

      </div>

      {/* Save Button */}

      <div className="mt-10 flex justify-end">

        <button
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
          "
        >
          <Save size={20} />

          Save Changes

        </button>

      </div>

    </motion.div>
  );
}

function InputField({
  icon: Icon,
  label,
  defaultValue,
}) {
  return (
    <div>

      <label className="mb-2 flex items-center gap-2 text-slate-300">

        <Icon
          size={18}
          className="text-cyan-400"
        />

        {label}

      </label>

      <input
        type="text"
        defaultValue={defaultValue}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-slate-950
          px-5
          py-4
          text-white
          outline-none
          transition
          focus:border-cyan-500
        "
      />

    </div>
  );
}