import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import AnalyticsCard from "./AnalyticsCard";

const AnalyticsCards = () => {
  const cards = [
    {
      title: "Total Complaints",
      value: "248",
      icon: ClipboardList,
      color: "blue",
      change: "+12%",
      positive: true,
      subtitle: "All submitted complaints",
    },
    {
      title: "Pending",
      value: "36",
      icon: Clock3,
      color: "amber",
      change: "-8%",
      positive: true,
      subtitle: "Awaiting action",
    },
    {
      title: "Resolved",
      value: "194",
      icon: CheckCircle2,
      color: "emerald",
      change: "+24%",
      positive: true,
      subtitle: "Successfully completed",
    },
    {
      title: "High Priority",
      value: "18",
      icon: AlertTriangle,
      color: "rose",
      change: "+5%",
      positive: false,
      subtitle: "Need immediate attention",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <AnalyticsCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
          change={card.change}
          positive={card.positive}
          subtitle={card.subtitle}
        />
      ))}
    </section>
  );
};

export default AnalyticsCards;