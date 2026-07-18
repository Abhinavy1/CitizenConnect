import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "City Cleanliness Drive",
    date: "20 Jul 2026",
    time: "09:00 AM",
    location: "Sector 17 Plaza",
    type: "Environment",
  },
  {
    id: 2,
    title: "Public Grievance Hearing",
    date: "22 Jul 2026",
    time: "11:30 AM",
    location: "Municipal Office",
    type: "Citizen Services",
  },
  {
    id: 3,
    title: "Smart Traffic Awareness Program",
    date: "24 Jul 2026",
    time: "03:00 PM",
    location: "City Auditorium",
    type: "Traffic",
  },
  {
    id: 4,
    title: "Digital Governance Workshop",
    date: "27 Jul 2026",
    time: "10:00 AM",
    location: "Community Hall",
    type: "Technology",
  },
];

const UpcomingEvents = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-violet-100 p-3">
            <CalendarDays className="h-7 w-7 text-violet-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Upcoming Events
            </h2>

            <p className="text-sm text-slate-500">
              Government programs and community activities
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700">
          View Calendar
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Event List */}
      <div className="space-y-5">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-slate-200 p-5 transition hover:border-violet-300 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                {event.type}
              </span>

              <span className="text-sm font-medium text-slate-500">
                {event.date}
              </span>
            </div>

            <h3 className="mb-4 text-lg font-bold text-slate-800">
              {event.title}
            </h3>

            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-violet-600" />
                {event.time}
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-500" />
                {event.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default UpcomingEvents;