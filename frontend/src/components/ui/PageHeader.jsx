import { motion } from "framer-motion";

function PageHeader({
  badge,
  title,
  description,
  align = "center",
  action,
  className = "",
}) {
  const alignment = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
        flex
        flex-col
        ${alignment[align]}
        max-w-4xl
        mx-auto
        mb-20
        ${className}
      `}
    >
      {badge && (
        <div
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            bg-emerald-500/10
            border
            border-emerald-500/20
            text-emerald-400
            text-sm
            font-semibold
            uppercase
            tracking-widest
          "
        >
          {badge}
        </div>
      )}

      <h2
        className="
          mt-6
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-black
          leading-tight
        "
      >
        <span className="text-white">
          {title}
        </span>
      </h2>

      {description && (
        <p
          className="
            mt-6
            text-lg
            leading-8
            text-slate-400
            max-w-3xl
          "
        >
          {description}
        </p>
      )}

      {action && (
        <div className="mt-10">
          {action}
        </div>
      )}
    </motion.div>
  );
}

export default PageHeader;