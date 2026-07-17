import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeOnOverlay = true,
}) {
  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={() => {
            if (closeOnOverlay) onClose?.();
          }}
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className={`
              w-full
              ${sizes[size]}
              rounded-3xl
              border
              border-slate-700
              bg-slate-900
              shadow-2xl
              overflow-hidden
            `}
          >

            {/* Header */}

            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-800">

              <h2 className="text-2xl font-bold text-white">
                {title}
              </h2>

              <button
                onClick={onClose}
                className="
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-slate-400
                  hover:bg-slate-800
                  hover:text-white
                  transition
                "
              >
                <X size={22} />
              </button>

            </div>

            {/* Body */}

            <div className="p-8 text-slate-300 max-h-[70vh] overflow-y-auto">

              {children}

            </div>

            {/* Footer */}

            {footer && (

              <div className="px-8 py-6 border-t border-slate-800 flex justify-end gap-4">

                {footer}

              </div>

            )}

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default Modal;