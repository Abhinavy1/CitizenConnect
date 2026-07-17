import { motion } from "framer-motion";
import AuthIllustration from "../features/auth/components/AuthIllustration";

export default function AuthLayout({ children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712]">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="hidden lg:block"
          >
            <AuthIllustration />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >
            {children}
          </motion.div>

        </div>

      </div>

    </main>
  );
}