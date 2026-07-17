import { motion } from "framer-motion";

const companies = [
  "Digital India",
  "Smart City",
  "Municipal Corp",
  "GovTech",
  "AI Governance",
  "Citizen First",
];

export default function TrustedBy() {
  return (
    <section className="py-24 bg-[#030712]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Trusted Platform
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Built for Modern Digital Governance
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            CitizenConnect empowers governments with AI-powered complaint
            management, transparency, analytics, and citizen engagement.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                p-8
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-500/40
                hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
              "
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-black text-white">
                {company.charAt(0)}
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {company}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Building secure, transparent, and AI-driven public services for
                smarter governance.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}