import NotificationCard from "./NotificationCard";

const notifications = [
  {
    id: 1,
    type: "complaint",
    title: "Complaint Assigned",
    message:
      "Your complaint regarding Road Damage has been assigned to the Municipal Corporation.",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "ai",
    title: "AI Analysis Completed",
    message:
      "CitizenConnect AI has analyzed your complaint and predicted a resolution within 2 days.",
    time: "35 minutes ago",
    read: false,
  },
  {
    id: 3,
    type: "resolved",
    title: "Complaint Resolved",
    message:
      "Your complaint about Street Light Repair has been successfully resolved.",
    time: "Yesterday",
    read: true,
  },
  {
    id: 4,
    type: "emergency",
    title: "High Priority Alert",
    message:
      "Your complaint has been marked as High Priority and forwarded to the Emergency Response Team.",
    time: "2 days ago",
    read: true,
  },
  {
    id: 5,
    type: "complaint",
    title: "Inspection Scheduled",
    message:
      "A field officer will visit the complaint location tomorrow between 10:00 AM and 12:00 PM.",
    time: "3 days ago",
    read: true,
  },
];

export default function NotificationList() {
  return (
    <div className="space-y-6">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}