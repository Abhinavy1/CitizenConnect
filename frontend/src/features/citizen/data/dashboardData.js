import {
  ClipboardList,
  Clock3,
  LoaderCircle,
  CircleCheckBig,
} from "lucide-react";

export const stats = [
  {
    id: 1,
    title: "Total Complaints",
    value: 128,
    change: "+12%",
    color: "from-blue-500 to-cyan-500",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Pending",
    value: 24,
    change: "+3",
    color: "from-yellow-500 to-orange-500",
    icon: Clock3,
  },
  {
    id: 3,
    title: "In Progress",
    value: 18,
    change: "+5",
    color: "from-purple-500 to-indigo-500",
    icon: LoaderCircle,
  },
  {
    id: 4,
    title: "Resolved",
    value: 86,
    change: "+18%",
    color: "from-emerald-500 to-green-500",
    icon: CircleCheckBig,
  },
];