import { useRef } from "react";
import { UploadCloud, ImagePlus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function UploadStep({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const fileInputRef = useRef(null);

  const handleFiles = (files) => {
    if (!files) return;

    const selectedFiles = Array.from(files);

    const newImages = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const removeImage = (index) => {
    const updated = [...formData.images];

    URL.revokeObjectURL(updated[index].preview);

    updated.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      images: updated,
    }));
  };

  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-4xl font-black text-white">
          Upload Evidence
        </h2>

        <p className="mt-3 text-slate-400">
          Upload photos that clearly show the issue.
        </p>

      </div>

      {/* Upload Box */}

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="rounded-3xl border-2 border-dashed border-cyan-500/40 bg-slate-900 p-12"
      >

        <div className="flex flex-col items-center">

          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10">

            <UploadCloud
              size={50}
              className="text-cyan-400"
            />

          </div>

          <h3 className="text-2xl font-bold text-white">
            Drag & Drop Images
          </h3>

          <p className="mt-3 text-center text-slate-400">
            PNG, JPG or JPEG
            <br />
            Maximum 10 Images
          </p>

          <button
            onClick={() => fileInputRef.current.click()}
            className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Select Images
          </button>

          <input
            ref={fileInputRef}
            hidden
            multiple
            accept="image/*"
            type="file"
            onChange={(e) =>
              handleFiles(e.target.files)
            }
          />

        </div>

      </motion.div>

      {/* Preview */}

      {formData.images.length > 0 && (

        <div>

          <div className="mb-6 flex items-center gap-3">

            <ImagePlus
              size={22}
              className="text-cyan-400"
            />

            <h3 className="text-2xl font-bold text-white">

              Uploaded Images

            </h3>

          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {formData.images.map((image, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
              >

                <img
                  src={image.preview}
                  alt=""
                  className="h-52 w-full object-cover"
                />

                <button
                  onClick={() => removeImage(index)}
                  className="flex w-full items-center justify-center gap-2 border-t border-white/10 py-4 text-red-400 transition hover:bg-red-500/10"
                >

                  <Trash2 size={18} />

                  Remove

                </button>

              </motion.div>

            ))}

          </div>

        </div>

      )}

      {/* Footer */}

      <div className="flex justify-between border-t border-white/10 pt-8">

        <button
          onClick={prevStep}
          className="rounded-2xl border border-white/10 px-8 py-4 text-white transition hover:bg-slate-800"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          Continue
        </button>

      </div>

    </div>
  );
}