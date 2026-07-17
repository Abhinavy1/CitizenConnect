import {
  CircleCheckBig,
  Building2,
  MapPin,
  Sparkles,
  ImageIcon,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SubmitStep({
  formData,
  prevStep,
  submitComplaint,
  loading,
}) {
  return (
    <div className="space-y-10">

      {/* Header */}

      <div>

        <h2 className="text-4xl font-black text-white">

          Review & Submit

        </h2>

        <p className="mt-3 text-slate-400">

          Please review your complaint before submitting it.

        </p>

      </div>

      {/* AI Summary */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500">

            <Sparkles
              size={40}
              className="text-white"
            />

          </div>

          <div>

            <h2 className="text-3xl font-black text-white">

              AI Summary

            </h2>

            <p className="mt-2 text-slate-300">

              Everything looks good. Your complaint is
              ready for submission.

            </p>

          </div>

        </div>

      </motion.div>

      {/* Review Grid */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Complaint */}

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

          <h3 className="mb-6 text-2xl font-bold text-white">

            Complaint Information

          </h3>

          <div className="space-y-5">

            <div>

              <p className="text-sm text-slate-400">

                Category

              </p>

              <p className="mt-1 text-lg text-white">

                {formData.category}

              </p>

            </div>

            <div>

              <p className="text-sm text-slate-400">

                Title

              </p>

              <p className="mt-1 text-lg text-white">

                {formData.title}

              </p>

            </div>

            <div>

              <p className="text-sm text-slate-400">

                Description

              </p>

              <p className="mt-2 leading-7 text-slate-300">

                {formData.description}

              </p>

            </div>

          </div>

        </div>

        {/* Location */}

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

          <div className="mb-6 flex items-center gap-3">

            <MapPin className="text-cyan-400" />

            <h3 className="text-2xl font-bold text-white">

              Location

            </h3>

          </div>

          <div className="space-y-5">

            <div>

              <p className="text-sm text-slate-400">

                State

              </p>

              <p className="mt-1 text-lg text-white">

                {formData.state || "-"}

              </p>

            </div>

            <div>

              <p className="text-sm text-slate-400">

                City

              </p>

              <p className="mt-1 text-lg text-white">

                {formData.city || "-"}

              </p>

            </div>

            <div>

              <p className="text-sm text-slate-400">

                Address

              </p>

              <p className="mt-2 leading-7 text-slate-300">

                {formData.address || "-"}

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* AI Routing */}

      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

        <div className="mb-6 flex items-center gap-3">

          <Building2
            className="text-emerald-400"
            size={24}
          />

          <h3 className="text-2xl font-bold text-white">

            Department Assignment

          </h3>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-950 p-5">

            <p className="text-sm text-slate-400">

              Department

            </p>

            <h4 className="mt-2 text-xl font-bold text-cyan-400">

              Municipal Corporation

            </h4>

          </div>

          <div className="rounded-2xl bg-slate-950 p-5">

            <p className="text-sm text-slate-400">

              Priority

            </p>

            <h4 className="mt-2 text-xl font-bold text-red-400">

              Medium

            </h4>

          </div>

          <div className="rounded-2xl bg-slate-950 p-5">

            <p className="text-sm text-slate-400">

              Estimated Resolution

            </p>

            <h4 className="mt-2 text-xl font-bold text-emerald-400">

              2 Days

            </h4>

          </div>

        </div>

      </div>

      {/* Uploaded Images */}

      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

        <div className="mb-6 flex items-center gap-3">

          <ImageIcon className="text-cyan-400" />

          <h3 className="text-2xl font-bold text-white">

            Uploaded Images

          </h3>

        </div>

        {formData.images.length === 0 ? (

          <p className="text-slate-400">

            No images uploaded.

          </p>

        ) : (

          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-5">

            {formData.images.map((image, index) => (

              <img
                key={index}
                src={image.preview}
                alt=""
                className="h-40 w-full rounded-2xl object-cover"
              />

            ))}

          </div>

        )}

      </div>

      {/* Success Note */}

      <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8">

        <div className="flex items-center gap-4">

          <CircleCheckBig
            size={30}
            className="text-emerald-400"
          />

          <div>

            <h3 className="text-xl font-bold text-white">

              Ready to Submit

            </h3>

            <p className="mt-2 text-slate-300">

              Your complaint will be securely forwarded to
              the appropriate government department.

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
          onClick={submitComplaint}
          disabled={loading}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-10
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
            disabled:opacity-60
          "
        >

          <Send size={20} />

          {loading
            ? "Submitting..."
            : "Submit Complaint"}

        </button>

      </div>

    </div>
  );
}