import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import AIMessage from "./AIMessage";
import TypingIndicator from "./TypingIndicator";

const messages = [
  {
    id: 1,
    sender: "ai",
    message:
      "👋 Hello! I'm CitizenConnect AI. How can I assist you today?",
    time: "09:00 AM",
  },
  {
    id: 2,
    sender: "user",
    message:
      "I want to report a large pothole near my locality.",
    time: "09:01 AM",
  },
  {
    id: 3,
    sender: "ai",
    message:
      "I can help with that. Please provide the location of the pothole and upload an image if available. I'll generate a detailed complaint for the Municipal Corporation.",
    time: "09:01 AM",
  },
  {
    id: 4,
    sender: "user",
    message:
      "The pothole is near Model Town Market, Jalandhar.",
    time: "09:02 AM",
  },
  {
    id: 5,
    sender: "ai",
    message:
      "Thank you! Based on the information provided, I've identified the responsible department as the Municipal Corporation. You can now submit the complaint directly or let me improve its description.",
    time: "09:02 AM",
  },
];

export default function AIChatWindow() {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
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
      className="
        flex
        h-[700px]
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        shadow-xl
      "
    >
      {/* Header */}

      <div
        className="
          border-b
          border-white/10
          p-6
        "
      >
        <h2 className="text-2xl font-bold text-white">
          AI Conversation
        </h2>

        <p className="mt-2 text-slate-400">
          Ask anything related to complaints,
          government services or schemes.
        </p>
      </div>

      {/* Messages */}

      <div
        className="
          flex-1
          space-y-6
          overflow-y-auto
          p-6
        "
      >
        {messages.map((item) => (
          <AIMessage
            key={item.id}
            sender={item.sender}
            message={item.message}
            time={item.time}
          />
        ))}

        {/* Typing */}

        <TypingIndicator />

        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}