import {
  Building2,
  TrafficCone,
  Shield,
  Hospital,
  School,
  Leaf,
  Zap,
  Landmark,
  Siren,
  CircleHelp,
} from "lucide-react";

const complaintCategories = [
  {
    id: 1,
    title: "Civic Infrastructure",
    icon: Building2,
    color: "from-cyan-500 to-blue-600",
    items: [
      "Road Damage",
      "Potholes",
      "Street Lights",
      "Drainage",
      "Water Supply",
      "Sewerage",
      "Garbage Collection",
      "Public Toilets",
      "Parks & Gardens",
    ],
  },

  {
    id: 2,
    title: "Traffic & Transport",
    icon: TrafficCone,
    color: "from-orange-500 to-yellow-500",
    items: [
      "Traffic Signal",
      "Illegal Parking",
      "Public Transport",
      "Bus Stop Issues",
      "Road Safety",
    ],
  },

  {
    id: 3,
    title: "Police & Public Safety",
    icon: Shield,
    color: "from-red-500 to-rose-600",
    items: [
      "Police Complaint",
      "Theft Report",
      "Cyber Crime",
      "Missing Person",
      "Domestic Violence",
      "Noise Pollution",
      "Illegal Activities",
      "Public Safety",
    ],
  },

  {
    id: 4,
    title: "Healthcare",
    icon: Hospital,
    color: "from-pink-500 to-rose-500",
    items: [
      "Government Hospital",
      "Primary Health Centre",
      "Ambulance",
      "Medical Negligence",
      "Medicine Availability",
      "Sanitation in Hospital",
    ],
  },

  {
    id: 5,
    title: "Education",
    icon: School,
    color: "from-violet-500 to-indigo-600",
    items: [
      "Government School",
      "Mid-Day Meal",
      "School Infrastructure",
      "Teacher Related Issues",
      "Scholarship Issue",
    ],
  },

  {
    id: 6,
    title: "Environment",
    icon: Leaf,
    color: "from-emerald-500 to-green-600",
    items: [
      "Air Pollution",
      "Water Pollution",
      "Tree Cutting",
      "Waste Dumping",
      "Animal Welfare",
    ],
  },

  {
    id: 7,
    title: "Utilities",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    items: [
      "Electricity",
      "Power Outage",
      "Water Leakage",
      "Gas Pipeline",
      "Internet / Broadband",
    ],
  },

  {
    id: 8,
    title: "Government Services",
    icon: Landmark,
    color: "from-sky-500 to-cyan-600",
    items: [
      "Aadhaar",
      "Ration Card",
      "Pension",
      "Income Certificate",
      "Caste Certificate",
      "Birth Certificate",
      "Death Certificate",
      "Property Tax",
      "Municipality",
    ],
  },

  {
    id: 9,
    title: "Emergency",
    icon: Siren,
    color: "from-red-600 to-orange-600",
    items: [
      "Fire Department",
      "Flood",
      "Natural Disaster",
      "Rescue Request",
    ],
  },

  {
    id: 10,
    title: "Others",
    icon: CircleHelp,
    color: "from-slate-500 to-slate-700",
    items: [
      "Other Complaint",
    ],
  },
];

export default complaintCategories;