import { motion } from "framer-motion";

function SectionHeading({
  title,
  subtitle,
  align = "left",
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: {
      title: "text-2xl",
      subtitle: "text-sm",
    },
    md: {
      title: "text-3xl",
      subtitle: "text-base",
    },
    lg: {
      title: "text-4xl",
      subtitle: "text-lg",
    },
  };

  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        flex
        flex-col
        gap-3
        mb-10
        ${alignment[align]}
        ${className}
      `}
    >
      <h3
        className={`
          font-bold
          text-white
          leading-tight
          ${sizes[size].title}
        `}
      >
        {title}
      </h3>

      {subtitle && (
        <p
          className={`
            text-slate-400
            leading-7
            max-w-2xl
            ${sizes[size].subtitle}
          `}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;