import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does CitizenConnect work?",
    answer:
      "Citizens submit complaints with images and location. AI automatically classifies them and assigns them to the correct department while providing real-time updates.",
  },
  {
    question: "Can I track my complaint?",
    answer:
      "Yes. Every complaint has a unique tracking ID and citizens receive notifications whenever the status changes.",
  },
  {
    question: "How does AI help?",
    answer:
      "AI categorizes complaints, predicts priorities, detects duplicate reports and provides insights to government officers.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes. CitizenConnect follows secure authentication practices and protects user information with role-based access control.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#030712] py-28">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.35em] text-sm font-semibold text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know about CitizenConnect.
          </p>

        </motion.div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .08 }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >

                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >
                  <ChevronDown className="text-cyan-400" />
                </motion.div>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      height:0,
                      opacity:0
                    }}
                    animate={{
                      height:"auto",
                      opacity:1
                    }}
                    exit={{
                      height:0,
                      opacity:0
                    }}
                    className="overflow-hidden"
                  >

                    <p className="px-6 pb-6 leading-8 text-slate-400">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}