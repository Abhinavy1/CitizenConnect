import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="
            rounded-[40px]
            border
            border-white/10
            bg-gradient-to-br
            from-slate-900
            via-[#0B1220]
            to-slate-900
            p-16
            text-center
            backdrop-blur-xl
          "
        >

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">

            Ready To Begin?

          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">

            Build Smarter Cities
            <br />

            With CitizenConnect

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            Transform complaint management with Artificial Intelligence,
            real-time analytics and transparent governance.
            Empower citizens, officers and administrators
            on one modern platform.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <button
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                px-9
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-500/30
                transition-all
                duration-300
                hover:scale-105
              "
            >

              Get Started

              <ArrowRight size={20} />

            </button>

            <button
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-9
                py-4
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                hover:bg-white/10
              "
            >

              Schedule Demo

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}