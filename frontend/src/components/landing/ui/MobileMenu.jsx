import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  "Platform",
  "Features",
  "Solutions",
  "Security",
  "Contact",
];

export default function MobileMenu({
  open,
  setOpen,
}) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity:0,
            y:-15
          }}
          animate={{
            opacity:1,
            y:0
          }}
          exit={{
            opacity:0,
            y:-15
          }}
          className="
          mt-4
          rounded-3xl
          border
          border-white/10
          bg-slate-900/95
          backdrop-blur-2xl
          p-6
          lg:hidden
        "
        >

          <div className="flex flex-col gap-6">

            {links.map((item)=>(

              <a
                key={item}
                href="#"
                onClick={()=>setOpen(false)}
                className="text-slate-300 hover:text-white"
              >
                {item}
              </a>

            ))}

            <Link
              to="/login"
              onClick={()=>setOpen(false)}
              className="text-slate-300"
            >
              Login
            </Link>

            <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white">

              Get Started

            </button>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}