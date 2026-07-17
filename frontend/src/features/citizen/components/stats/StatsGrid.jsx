import StatCard from "./StatCard";
import { stats } from "../../data/dashboardData";

export default function StatsGrid() {
  return (
    <section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (
          <StatCard
            key={item.id}
            {...item}
          />
        ))}

      </div>

    </section>
  );
}