import {
  FilePlus2,
  ClipboardCheck,
  CircleCheckBig,
  MessageSquare,
  Bell,
  TriangleAlert,
} from "lucide-react";

export const activityData = [
  {
    id: 1,
    title: "Complaint Submitted",
    description:
      "Your complaint about Street Light Not Working has been submitted successfully.",
    time: "5 mins ago",
    color: "bg-cyan-500/10",
    text: "text-cyan-400",
    icon: FilePlus2,
  },

  {
    id: 2,
    title: "Officer Assigned",
    description:
      "Municipal Officer Rajesh Kumar has been assigned to investigate your complaint.",
    time: "28 mins ago",
    color: "bg-blue-500/10",
    text: "text-blue-400",
    icon: ClipboardCheck,
  },

  {
    id: 3,
    title: "Complaint Resolved",
    description:
      "Water Leakage complaint has been marked as resolved by the department.",
    time: "2 hours ago",
    color: "bg-emerald-500/10",
    text: "text-emerald-400",
    icon: CircleCheckBig,
  },

  {
    id: 4,
    title: "AI Suggestion",
    description:
      "AI recommends attaching location photos to improve complaint resolution speed.",
    time: "Yesterday",
    color: "bg-violet-500/10",
    text: "text-violet-400",
    icon: MessageSquare,
  },

  {
    id: 5,
    title: "System Notification",
    description:
      "New sanitation campaign has started in your locality this week.",
    time: "2 days ago",
    color: "bg-yellow-500/10",
    text: "text-yellow-400",
    icon: Bell,
  },

  {
    id: 6,
    title: "Priority Alert",
    description:
      "Road Damage complaint has been upgraded to High Priority after AI analysis.",
    time: "3 days ago",
    color: "bg-red-500/10",
    text: "text-red-400",
    icon: TriangleAlert,
  },
];