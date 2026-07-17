import { useMemo } from "react";
import { Sparkles, FileText } from "lucide-react";

const suggestions = [
  "Mention the exact location.",
  "Include landmarks if possible.",
  "Mention when the issue started.",
  "Explain how it affects people.",
  "Avoid very short descriptions.",
];

export default function DetailsStep({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const titleLength = formData.title.length;
  const descriptionLength = formData.description.length;

  const completion = useMemo(() => {
    let score = 0;

    if (titleLength >= 10) score += 40;
    if (descriptionLength >= 80) score += 60;

    return score;
  }, [titleLength, descriptionLength]);

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-10">

      {/* Header */}

      <div>

        <h2 className="text-4xl font-black text-white">

          Complaint Details

        </h2>

        <p className="mt-3 text-slate-400">

          Give complete information so the department can
          understand the issue quickly.

        </p>

      </div>

      {/* Progress */}

      <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-6">

        <div className="mb-4 flex items-center justify-between">

          <h3 className="font-semibold text-white">

            Complaint Quality

          </h3>

          <span className="font-bold text-cyan-400">

            {completion}%

          </span>

        </div>

        <div className="h-3 rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
            style={{
              width: `${completion}%`,
            }}
          />

        </div>

      </div>

      {/* Title */}

      <div>

        <label className="mb-3 block text-white font-semibold">

          Complaint Title

        </label>

        <input
          type="text"
          value={formData.title}
          onChange={(e) =>
            updateField("title", e.target.value)
          }
          placeholder="Example: Street Light Not Working"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-900
            p-5
            text-white
            outline-none
            transition
            focus:border-cyan-500
          "
        />

        <div className="mt-2 text-right text-sm text-slate-500">

          {titleLength}/100

        </div>

      </div>

      {/* Description */}

      <div>

        <label className="mb-3 block text-white font-semibold">

          Detailed Description

        </label>

        <textarea
          rows={8}
          value={formData.description}
          onChange={(e) =>
            updateField("description", e.target.value)
          }
          placeholder="Describe your complaint in detail..."
          className="
            w-full
            resize-none
            rounded-2xl
            border
            border-white/10
            bg-slate-900
            p-5
            text-white
            outline-none
            transition
            focus:border-cyan-500
          "
        />

        <div className="mt-2 flex items-center justify-between">

          <span className="text-sm text-slate-500">

            Minimum 80 characters recommended

          </span>

          <span className="text-sm text-slate-500">

            {descriptionLength}/1000

          </span>

        </div>

      </div>

      {/* AI Suggestions */}

      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8">

        <div className="mb-6 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500">

            <Sparkles className="text-white" />

          </div>

          <div>

            <h3 className="text-2xl font-bold text-white">

              AI Writing Suggestions

            </h3>

            <p className="text-slate-400">

              Improve your complaint before submission.

            </p>

          </div>

        </div>

        <div className="grid gap-4">

          {suggestions.map((tip) => (

            <div
              key={tip}
              className="flex items-center gap-4 rounded-2xl bg-slate-950/70 p-5"
            >

              <FileText
                size={20}
                className="text-cyan-400"
              />

              <span className="text-slate-300">

                {tip}

              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-between border-t border-white/10 pt-8">

        <button
          onClick={prevStep}
          className="rounded-2xl border border-white/10 px-8 py-4 text-white transition hover:bg-slate-800"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={
            !formData.title ||
            !formData.description
          }
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
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Continue
        </button>

      </div>

    </div>
  );
}