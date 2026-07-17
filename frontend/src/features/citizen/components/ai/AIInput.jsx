import { useState } from "react";
import { motion } from "framer-motion";
import {
  SendHorizonal,
  Paperclip,
  Image,
  Mic,
  Smile,
} from "lucide-react";

export default function AIInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("Message:", message);

    // TODO:
    // Send message to Gemini API

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900
        p-5
        shadow-xl
      "
    >
      {/* Text Area */}

      <textarea
        rows={2}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask CitizenConnect AI anything..."
        className="
          w-full
          resize-none
          rounded-2xl
          border
          border-white/10
          bg-slate-950
          p-4
          text-white
          outline-none
          transition
          focus:border-cyan-500
        "
      />

      {/* Bottom Toolbar */}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

        {/* Left Buttons */}

        <div className="flex items-center gap-3">

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="
              rounded-xl
              bg-slate-800
              p-3
              text-slate-300
              transition
              hover:bg-slate-700
              hover:text-cyan-400
            "
          >
            <Paperclip size={20} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="
              rounded-xl
              bg-slate-800
              p-3
              text-slate-300
              transition
              hover:bg-slate-700
              hover:text-cyan-400
            "
          >
            <Image size={20} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="
              rounded-xl
              bg-slate-800
              p-3
              text-slate-300
              transition
              hover:bg-slate-700
              hover:text-yellow-400
            "
          >
            <Smile size={20} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="
              rounded-xl
              bg-slate-800
              p-3
              text-slate-300
              transition
              hover:bg-slate-700
              hover:text-red-400
            "
          >
            <Mic size={20} />
          </motion.button>

        </div>

        {/* Send */}

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={handleSend}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            transition
          "
        >
          <SendHorizonal size={20} />

          Send

        </motion.button>

      </div>
    </div>
  );
}