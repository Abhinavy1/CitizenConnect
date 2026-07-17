import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

const menus = [
  {
    icon: <LayoutDashboard size={20} />,
    text: "Dashboard",
  },
  {
    icon: <FileText size={20} />,
    text: "Complaints",
  },
  {
    icon: <Users size={20} />,
    text: "Citizens",
  },
  {
    icon: <BarChart3 size={20} />,
    text: "Analytics",
  },
  {
    icon: <Settings size={20} />,
    text: "Settings",
  },
];

export default function DashboardSidebar() {
  return (
    <aside
      className="
      w-64
      border-r
      border-white/10
      bg-slate-950
      p-6
    "
    >
      <h2 className="mb-10 text-2xl font-black text-white">
        Dashboard
      </h2>

      <div className="space-y-3">
        {menus.map((item, index) => (
          <button
            key={index}
            className="
            flex
            w-full
            items-center
            gap-4
            rounded-2xl
            px-5
            py-4
            text-slate-300
            transition
            hover:bg-blue-600
            hover:text-white
          "
          >
            {item.icon}

            {item.text}
          </button>
        ))}
      </div>
    </aside>
  );
}