import {
  FileText,
  SearchCheck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FileText size={34} />,
    step: "Step 1",
    title: "Register Complaint",
    description:
      "Citizens submit complaints with images, location and detailed descriptions.",
  },
  {
    icon: <SearchCheck size={34} />,
    step: "Step 2",
    title: "AI Verification",
    description:
      "Artificial Intelligence classifies the complaint and assigns it to the correct department.",
  },
  {
    icon: <CheckCircle2 size={34} />,
    step: "Step 3",
    title: "Issue Resolved",
    description:
      "Officers resolve the complaint while citizens receive real-time progress updates.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#030712] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-cyan-400">
            Workflow
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            How CitizenConnect Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            From complaint registration to final resolution,
            every step is transparent, intelligent and
            designed to improve governance.
          </p>
        </motion.div>

        <div className="relative mt-20 grid gap-8 lg:grid-cols-3">

          {steps.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.15 }}
              whileHover={{ y:-8 }}
              className="
                relative
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                p-10
                backdrop-blur-xl
                hover:border-cyan-500/40
              "
            >

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                {item.icon}

              </div>

              <p className="mt-8 text-sm uppercase tracking-[0.3em] text-cyan-400">

                {item.step}

              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-5 leading-7 text-slate-400">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}