import { motion } from "framer-motion";
import Container from "./Container";

function PageSection({
  id,
  children,
  className = "",
  background = "transparent",
  size = "xl",
}) {
  const backgrounds = {
    transparent: "bg-transparent",
    dark: "bg-[#050816]",
    slate: "bg-slate-900",
    glass: "bg-white/5 backdrop-blur-xl",
    gradient:
      "bg-gradient-to-b from-[#050816] via-slate-900 to-[#050816]",
  };

  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
        relative
        py-24
        lg:py-32
        overflow-hidden
        ${backgrounds[background]}
        ${className}
      `}
    >
      <Container size={size}>
        {children}
      </Container>
    </motion.section>
  );
}

export default PageSection;