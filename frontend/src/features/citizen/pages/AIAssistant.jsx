import { motion } from "framer-motion";

import DashboardLayout from "../components/layout/DashboardLayout";

import AIHeader from "../components/ai/AIHeader";
import AISidePanel from "../components/ai/AISidePanel";
import AIChatWindow from "../components/ai/AIChatWindow";
import AIInput from "../components/ai/AIInput";
import QuickPrompts from "../components/ai/QuickPrompts";

export default function AIAssistant() {

  return (

    <DashboardLayout>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="space-y-8"
      >

        {/* ===================================== */}

        {/* Header */}

        {/* ===================================== */}

        <AIHeader />

        {/* ===================================== */}

        {/* Main Content */}

        {/* ===================================== */}

        <div className="grid gap-8 xl:grid-cols-4">

          {/* Left Side */}

          <div className="xl:col-span-1">

            <AISidePanel />

          </div>

          {/* Right Side */}

          <div className="space-y-8 xl:col-span-3">

            <AIChatWindow />

            <AIInput />
                        {/* Quick Prompts */}

            <QuickPrompts />

          </div>

        </div>

      </motion.div>

    </DashboardLayout>

  );

}