import { Check } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  "Category",
  "Upload",
  "Details",
  "Location",
  "AI Review",
  "Submit",
];

export default function StepIndicator({
  currentStep,
  setCurrentStep,
}) {
  return (
    <div className="mb-12 w-full">

      {/* Desktop Stepper */}

      <div className="hidden md:flex items-center justify-between">

        {steps.map((step, index) => {

          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={step}
              className="flex flex-1 items-center"
            >

              <div
                className="flex flex-col items-center"
              >

                <motion.button
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => setCurrentStep(index)}
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    transition-all
                    duration-300

                    ${
                      completed
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : active
                        ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-500/40"
                        : "border-slate-700 bg-slate-900 text-slate-500"
                    }
                  `}
                >

                  {completed ? (
                    <Check size={22} />
                  ) : (
                    <span className="font-bold">

                      {index + 1}

                    </span>
                  )}

                </motion.button>

                <span
                  className={`
                    mt-3
                    text-sm
                    font-medium

                    ${
                      active
                        ? "text-cyan-400"
                        : completed
                        ? "text-emerald-400"
                        : "text-slate-500"
                    }
                  `}
                >

                  {step}

                </span>

              </div>

              {index !== steps.length - 1 && (

                <div className="mx-4 h-[3px] flex-1 rounded-full bg-slate-800">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: completed ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  />

                </div>

              )}

            </div>
          );

        })}

      </div>

      {/* Mobile */}

      <div className="md:hidden">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold text-white">

            Step {currentStep + 1} of {steps.length}

          </h2>

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">

            {steps[currentStep]}

          </span>

        </div>

        <div className="mt-6 h-3 rounded-full bg-slate-800">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
            transition={{
              duration: 0.4,
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
          />

        </div>

      </div>

    </div>
  );
}