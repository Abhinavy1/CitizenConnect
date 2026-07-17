import { motion } from "framer-motion";
import {
  FilePlus2,
  SearchCheck,
  Building2,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Complaint",
    description:
      "Report issues with images, location and complete details in just a few clicks.",
    icon: FilePlus2,
  },
  {
    number: "02",
    title: "Verification",
    description:
      "The complaint is reviewed and automatically assigned to the correct department.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Department Action",
    description:
      "Government officials receive, investigate and resolve the reported issue.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Issue Resolved",
    description:
      "Track progress in real time and receive updates until the issue is completely resolved.",
    icon: CheckCircle2,
  },
];

function HowItWorks() {
  return (
    <section className="py-32 bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Process
          </p>

          <h2 className="text-5xl font-black mt-6">
            How CitizenConnect Works
          </h2>

          <p className="mt-6 text-slate-400 leading-8 text-lg">
            A simple and transparent workflow connecting citizens
            with government departments for faster issue resolution.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative bg-slate-800 rounded-3xl p-8 border border-slate-700"
              >

                <div className="text-6xl font-black text-slate-700 absolute right-6 top-5">
                  {step.number}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center mb-8">

                  <Icon size={30} />

                </div>

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-5 text-slate-400 leading-8">
                  {step.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;