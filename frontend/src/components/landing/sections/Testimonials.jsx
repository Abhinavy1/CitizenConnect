import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Citizen",
    message:
      "CitizenConnect made reporting civic issues incredibly simple. I received updates at every stage until my complaint was resolved.",
  },
  {
    name: "Priya Verma",
    role: "Municipal Officer",
    message:
      "The AI categorization reduced manual work significantly. We now respond faster and manage complaints more efficiently.",
  },
  {
    name: "Amit Singh",
    role: "Administrator",
    message:
      "The analytics dashboard provides clear insights into department performance and citizen satisfaction.",
  },
];

export default function Testimonials() {
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

          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Loved by Citizens & Officers
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Hear what people say about using CitizenConnect for smarter,
            faster and more transparent governance.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
              whileHover={{ y: -8 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-slate-900/70
                p-8
                backdrop-blur-xl
                hover:border-cyan-500/40
                hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
              "
            >

              <div className="flex gap-1 text-yellow-400">

                {[1,2,3,4,5].map((star)=>(

                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                  />

                ))}

              </div>

              <p className="mt-6 leading-8 text-slate-300 italic">
                "{item.message}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}