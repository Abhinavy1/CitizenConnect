import {
  Sparkles,
  Building2,
  ShieldAlert,
  Clock3,
  Brain,
  CircleCheckBig,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AIReviewStep({
  formData,
  nextStep,
  prevStep,
}) {

  // -----------------------------
  // AI Simulation
  // Replace with Gemini API later
  // -----------------------------

  const category = formData.category || "Road Damage";

  let department = "Municipal Corporation";
  let priority = "Medium";
  let eta = "2-3 Days";
  let confidence = 96;

  if (
    category.includes("Police") ||
    category.includes("Cyber") ||
    category.includes("Theft")
  ) {
    department = "Police Department";
    priority = "High";
    eta = "6 Hours";
    confidence = 98;
  }

  if (
    category.includes("Hospital") ||
    category.includes("Ambulance")
  ) {
    department = "Health Department";
    priority = "Critical";
    eta = "1 Hour";
    confidence = 99;
  }

  if (
    category.includes("School")
  ) {
    department = "Education Department";
    priority = "Medium";
    eta = "3 Days";
    confidence = 95;
  }

  if (
    category.includes("Electricity")
  ) {
    department = "Electricity Board";
    priority = "High";
    eta = "12 Hours";
    confidence = 97;
  }

  return (

    <div className="space-y-10">

      {/* Header */}

      <div>

        <h2 className="text-4xl font-black text-white">

          AI Complaint Analysis

        </h2>

        <p className="mt-3 text-slate-400">

          CitizenConnect AI has analyzed your complaint and
          predicted the most suitable department.

        </p>

      </div>

      {/* AI Banner */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-gradient-to-r
          from-cyan-500/10
          via-slate-900
          to-blue-500/10
          p-8
        "
      >

        <div className="flex items-center gap-5">

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-cyan-500
            "
          >

            <Brain
              size={42}
              className="text-white"
            />

          </div>

          <div>

            <h2 className="text-3xl font-black text-white">

              AI Analysis Complete

            </h2>

            <p className="mt-2 text-slate-300">

              Smart routing has been generated.

            </p>

          </div>

        </div>

      </motion.div>

      {/* Cards */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Category */}

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-7">

          <div className="flex items-center gap-4">

            <Sparkles className="text-cyan-400" />

            <h3 className="text-xl font-bold text-white">

              Predicted Category

            </h3>

          </div>

          <h2 className="mt-6 text-3xl font-black text-cyan-400">

            {category}

          </h2>

        </div>

        {/* Department */}

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-7">

          <div className="flex items-center gap-4">

            <Building2 className="text-emerald-400" />

            <h3 className="text-xl font-bold text-white">

              Assigned Department

            </h3>

          </div>

          <h2 className="mt-6 text-3xl font-black text-emerald-400">

            {department}

          </h2>

        </div>

        {/* Priority */}

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-7">

          <div className="flex items-center gap-4">

            <ShieldAlert className="text-red-400" />

            <h3 className="text-xl font-bold text-white">

              Priority

            </h3>

          </div>

          <h2 className="mt-6 text-3xl font-black text-red-400">

            {priority}

          </h2>

        </div>

        {/* ETA */}

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-7">

          <div className="flex items-center gap-4">

            <Clock3 className="text-yellow-400" />

            <h3 className="text-xl font-bold text-white">

              Estimated Resolution

            </h3>

          </div>

          <h2 className="mt-6 text-3xl font-black text-yellow-400">

            {eta}

          </h2>

        </div>

      </div>

      {/* Confidence */}

      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-2xl font-bold text-white">

              AI Confidence

            </h3>

            <p className="mt-2 text-slate-400">

              Confidence based on complaint details.

            </p>

          </div>

          <span className="text-4xl font-black text-cyan-400">

            {confidence}%

          </span>

        </div>

        <div className="mt-8 h-4 rounded-full bg-slate-800">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${confidence}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
            "
          />

        </div>

      </div>

      {/* Footer */}

      <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8">

        <div className="flex items-center gap-4">

          <CircleCheckBig
            className="text-emerald-400"
            size={28}
          />

          <div>

            <h3 className="text-xl font-bold text-white">

              Ready for Submission

            </h3>

            <p className="mt-2 text-slate-300">

              Your complaint is ready to be submitted to
              the respective department.

            </p>

          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-between border-t border-white/10 pt-8">

        <button
          onClick={prevStep}
          className="
            rounded-2xl
            border
            border-white/10
            px-8
            py-4
            text-white
            transition
            hover:bg-slate-800
          "
        >
          Back
        </button>

        <button
          onClick={nextStep}
          className="
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
          "
        >
          Continue
        </button>

      </div>

    </div>

  );
}