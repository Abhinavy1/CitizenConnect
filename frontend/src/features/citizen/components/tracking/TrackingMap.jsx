import { motion } from "framer-motion";
import {
  MapPinned,
  Navigation,
  LocateFixed,
  ExternalLink,
  Satellite,
} from "lucide-react";

export default function TrackingMap() {
  // Mock data
  // Replace with Google Maps later

  const location = {
    latitude: "31.3260",
    longitude: "75.5762",
    officerDistance: "1.8 km",
    status: "GPS Active",
    address:
      "Near Main Market, Jalandhar, Punjab",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
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

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-cyan-500
              to-blue-600
            "
          >

            <MapPinned
              size={28}
              className="text-white"
            />

          </div>

          <div>

            <h2 className="text-2xl font-black text-white">

              Complaint Location

            </h2>

            <p className="text-slate-400">

              Live tracking location

            </p>

          </div>

        </div>

        <span
          className="
            rounded-full
            bg-emerald-500/10
            px-4
            py-2
            text-sm
            font-semibold
            text-emerald-400
          "
        >
          {location.status}
        </span>

      </div>

      {/* Map Placeholder */}

      <div
        className="
          relative
          flex
          h-96
          items-center
          justify-center
          overflow-hidden
          rounded-3xl
          border
          border-dashed
          border-cyan-500/30
          bg-gradient-to-br
          from-slate-950
          to-slate-900
        "
      >

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Complaint */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            absolute
            left-[42%]
            top-[40%]
            z-10
          "
        >

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-red-500
              shadow-lg
            "
          >

            <MapPinned
              size={26}
              className="text-white"
            />

          </div>

        </motion.div>

        {/* Officer */}

        <motion.div
          animate={{
            x: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            absolute
            right-[22%]
            bottom-[30%]
          "
        >

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-cyan-500
              shadow-lg
            "
          >

            <Navigation
              size={24}
              className="text-white"
            />

          </div>

        </motion.div>

        <div className="absolute bottom-6 rounded-2xl bg-black/50 px-5 py-3 backdrop-blur">

          <p className="text-white font-semibold">

            Google Maps Integration Coming Soon

          </p>

        </div>

      </div>

      {/* Information */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl bg-slate-950 p-6">

          <div className="flex items-center gap-3">

            <LocateFixed
              size={20}
              className="text-cyan-400"
            />

            <h3 className="font-bold text-white">

              Coordinates

            </h3>

          </div>

          <p className="mt-4 text-slate-400">

            Latitude

          </p>

          <p className="font-semibold text-white">

            {location.latitude}

          </p>

          <p className="mt-4 text-slate-400">

            Longitude

          </p>

          <p className="font-semibold text-white">

            {location.longitude}

          </p>

        </div>

        <div className="rounded-2xl bg-slate-950 p-6">

          <div className="flex items-center gap-3">

            <Satellite
              size={20}
              className="text-cyan-400"
            />

            <h3 className="font-bold text-white">

              Tracking Details

            </h3>

          </div>

          <p className="mt-4 text-slate-400">

            Officer Distance

          </p>

          <p className="font-semibold text-white">

            {location.officerDistance}

          </p>

          <p className="mt-4 text-slate-400">

            Address

          </p>

          <p className="font-semibold text-white">

            {location.address}

          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 flex justify-end">

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

          <ExternalLink size={20} />

          Open in Google Maps

        </button>

      </div>

    </motion.div>
  );
}