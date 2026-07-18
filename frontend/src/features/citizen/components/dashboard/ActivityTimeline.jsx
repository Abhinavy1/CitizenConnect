import { motion } from "framer-motion";
import { History } from "lucide-react";
import TimelineItem from "./TimelineItem";

const timeline = [
  {
    id: 1,
    type: "submitted",
    title: "Complaint Submitted",
    description:
      "Your complaint regarding potholes on Main Road has been successfully submitted and assigned Complaint ID CC-10231.",
    time: "09:20 AM",
  },
  {
    id: 2,
    type: "assigned",
    title: "Officer Assigned",
    description:
      "Municipal Corporation has assigned an officer to inspect the reported location and begin the resolution process.",
    time: "10:45 AM",
  },
  {
    id: 3,
    type: "progress",
    title: "Inspection In Progress",
    description:
      "The assigned officer has reached the location and inspection work is currently underway.",
    time: "12:30 PM",
  },
  {
    id: 4,
    type: "resolved",
    title: "Complaint Resolved",
    description:
      "Road repair work has been completed successfully. Please verify the resolution and provide your feedback.",
    time: "05:40 PM",
  },
];

const ActivityTimeline = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-indigo-100 p-3">
          <History className="h-6 w-6 text-indigo-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Activity Timeline
          </h2>

          <p className="text-sm text-slate-500">
            Recent complaint activities and updates
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <TimelineItem
            key={item.id}
            title={item.title}
            description={item.description}
            time={item.time}
            type={item.type}
            isLast={index === timeline.length - 1}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ActivityTimeline;