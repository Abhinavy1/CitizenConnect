import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  X,
  CalendarDays,
  ImageIcon,
} from "lucide-react";

export default function EvidenceGallery() {
  // Mock Images
  // Replace with backend API later

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
      uploadedAt: "14 Jul 2026 • 09:10 AM",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1200",
      uploadedAt: "14 Jul 2026 • 09:12 AM",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
      uploadedAt: "14 Jul 2026 • 09:15 AM",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200",
      uploadedAt: "14 Jul 2026 • 09:17 AM",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-slate-900
          p-8
          shadow-xl
        "
      >
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500
                to-blue-600
              "
            >
              <Camera
                size={28}
                className="text-white"
              />
            </div>

            <div>

              <h2 className="text-2xl font-black text-white">
                Evidence Gallery
              </h2>

              <p className="text-slate-400">
                Uploaded complaint images
              </p>

            </div>

          </div>

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            {images.length} Images
          </span>

        </div>

        {/* Images */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {images.map((image) => (

            <motion.div
              key={image.id}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedImage(image)}
              className="
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-slate-950
              "
            >

              <img
                src={image.url}
                alt="Complaint"
                className="
                  h-56
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                "
              />

              <div className="p-4">

                <div className="flex items-center gap-2 text-slate-400">

                  <CalendarDays size={15} />

                  <span className="text-xs">
                    {image.uploadedAt}
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

      {/* Image Preview Modal */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/80
              p-6
            "
          >

            <div className="relative max-w-5xl">

              <button
                onClick={() => setSelectedImage(null)}
                className="
                  absolute
                  right-4
                  top-4
                  rounded-full
                  bg-black/60
                  p-3
                  text-white
                "
              >

                <X size={22} />

              </button>

              <img
                src={selectedImage.url}
                alt=""
                className="
                  max-h-[85vh]
                  rounded-3xl
                  object-contain
                "
              />

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}