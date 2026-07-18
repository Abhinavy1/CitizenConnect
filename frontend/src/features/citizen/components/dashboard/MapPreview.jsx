import { motion } from "framer-motion";
import {
  MapPinned,
  Navigation,
  LocateFixed,
  MapPin,
  ArrowRight,
} from "lucide-react";

const hotspots = [
  {
    id: 1,
    area: "Sector 21",
    complaints: 24,
    color: "bg-red-500",
  },
  {
    id: 2,
    area: "Model Town",
    complaints: 15,
    color: "bg-amber-500",
  },
  {
    id: 3,
    area: "Civil Lines",
    complaints: 8,
    color: "bg-emerald-500",
  },
  {
    id: 4,
    area: "Industrial Area",
    complaints: 12,
    color: "bg-blue-500",
  },
];

const MapPreview = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-emerald-100 p-3">
            <MapPinned className="h-7 w-7 text-emerald-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Complaint Heat Map
            </h2>

            <p className="text-sm text-slate-500">
              Live complaint distribution across the city
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700">
          Open Full Map
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Fake Map */}
      <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
        {/* Roads */}
        <div className="absolute left-10 top-20 h-2 w-4/5 rounded-full bg-white/80" />
        <div className="absolute left-20 top-48 h-2 w-3/5 rounded-full bg-white/80" />
        <div className="absolute left-32 top-72 h-2 w-2/3 rounded-full bg-white/80" />

        <div className="absolute left-36 top-10 h-80 w-2 rounded-full bg-white/80" />
        <div className="absolute right-24 top-16 h-72 w-2 rounded-full bg-white/80" />
        <div className="absolute left-1/2 top-8 h-80 w-2 -translate-x-1/2 rounded-full bg-white/80" />

        {/* Center Marker */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute"
        >
          <LocateFixed className="h-12 w-12 text-emerald-600" />
        </motion.div>

        {/* Hotspots */}
        <div className="absolute left-[20%] top-[20%]">
          <div className="relative">
            <MapPin className="h-9 w-9 text-red-600" />
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              24
            </span>
          </div>
        </div>

        <div className="absolute left-[68%] top-[25%]">
          <div className="relative">
            <MapPin className="h-8 w-8 text-amber-500" />
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
              15
            </span>
          </div>
        </div>

        <div className="absolute left-[38%] top-[70%]">
          <div className="relative">
            <MapPin className="h-8 w-8 text-blue-600" />
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              12
            </span>
          </div>
        </div>

        <div className="absolute left-[72%] top-[72%]">
          <div className="relative">
            <MapPin className="h-8 w-8 text-emerald-600" />
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
              8
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-center gap-3">
              <div className={`h-4 w-4 rounded-full ${spot.color}`} />

              <div>
                <h4 className="font-semibold text-slate-800">
                  {spot.area}
                </h4>

                <p className="text-sm text-slate-500">
                  {spot.complaints} complaints
                </p>
              </div>
            </div>

            <Navigation className="h-5 w-5 text-slate-400" />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default MapPreview;