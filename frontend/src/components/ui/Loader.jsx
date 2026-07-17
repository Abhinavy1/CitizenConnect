import { motion } from "framer-motion";

function Loader({
  size = "md",
  text = "",
  fullScreen = false,
  className = "",
}) {
  const sizes = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-[3px]",
    lg: "w-14 h-14 border-4",
    xl: "w-20 h-20 border-[5px]",
  };

  const loader = (
    <div
      className={`flex flex-col items-center justify-center gap-5 ${className}`}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1,
        }}
        className={`
          ${sizes[size]}
          rounded-full
          border-emerald-500
          border-t-transparent
        `}
      />

      {text && (
        <p className="text-slate-400 text-sm tracking-wide">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/90 backdrop-blur-md">
        {loader}
      </div>
    );
  }

  return loader;
}

export default Loader;