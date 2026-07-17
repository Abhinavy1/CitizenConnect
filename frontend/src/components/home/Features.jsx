import { motion } from "framer-motion";
import {
  ShieldCheck,
  BellRing,
  BarChart3,
  Users,
  Smartphone,
  MapPinned,
} from "lucide-react";

import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Complaint Filing",
    description:
      "Submit complaints securely with encrypted data and transparent workflows.",
  },
  {
    icon: BellRing,
    title: "Real-Time Notifications",
    description:
      "Receive instant updates whenever your complaint status changes.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Powerful dashboards with live complaint trends and department insights.",
  },
  {
    icon: Users,
    title: "Role Based Access",
    description:
      "Dedicated experiences for Citizens, Officers and Administrators.",
  },
  {
    icon: Smartphone,
    title: "Responsive Everywhere",
    description:
      "Optimized for desktop, tablet and mobile devices.",
  },
  {
    icon: MapPinned,
    title: "Location Tracking",
    description:
      "Attach complaint locations with map integration for faster resolution.",
  },
];

function Features() {
  return (
    <section className="relative py-40">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          tag="PLATFORM"
          title="Everything You Need"
          description="CitizenConnect combines powerful tools for citizens, officers and administrators into one intelligent platform."
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .08,
                }}
              >
                <GlassCard className="p-10 h-full">

                  <div className="w-20 h-20 rounded-3xl bg-green-500/10 flex items-center justify-center border border-green-500/20">

                    <Icon
                      size={34}
                      className="text-green-400"
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">

                    {feature.title}

                  </h3>

                  <p className="mt-5 text-slate-400 leading-8">

                    {feature.description}

                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;