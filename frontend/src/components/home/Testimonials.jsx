import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Citizen",
    text: "CitizenConnect made reporting civic issues incredibly simple. I could track every update until the issue was resolved.",
  },
  {
    name: "Priya Verma",
    role: "Municipal Officer",
    text: "Managing complaints is much easier now. The dashboard provides complete transparency and improves response time.",
  },
  {
    name: "Amit Singh",
    role: "City Administrator",
    text: "The analytics and reporting features help us understand department performance and improve public services.",
  },
];

function Testimonials() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[5px] text-blue-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl font-black mt-6">
            What People Say
          </h2>

          <p className="mt-6 text-slate-500 text-lg leading-8">
            Trusted by citizens and government officials for transparent and
            efficient complaint management.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl shadow-lg border border-slate-200 p-8"
            >

              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-600 leading-8">
                "{item.text}"
              </p>

              <div className="mt-8 flex items-center">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
                  {item.name.charAt(0)}
                </div>

                <div className="ml-4">

                  <h4 className="font-bold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-slate-500">
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

export default Testimonials;