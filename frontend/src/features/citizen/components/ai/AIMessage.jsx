import { motion } from "framer-motion";
import {
  Bot,
  User,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Paperclip,
} from "lucide-react";

export default function AIMessage({
  message,
  sender = "ai",
  time = "Just now",
  attachment = null,
}) {
  const isAI = sender === "ai";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`flex ${isAI ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`flex max-w-3xl gap-4 ${
          isAI ? "" : "flex-row-reverse"
        }`}
      >
        {/* Avatar */}

        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            ${
              isAI
                ? "bg-gradient-to-br from-cyan-500 to-blue-600"
                : "bg-gradient-to-br from-emerald-500 to-green-600"
            }
          `}
        >
          {isAI ? (
            <Bot
              size={24}
              className="text-white"
            />
          ) : (
            <User
              size={24}
              className="text-white"
            />
          )}
        </div>

        {/* Message */}

        <div
          className={`
            rounded-3xl
            border
            border-white/10
            p-5
            shadow-lg
            ${
              isAI
                ? "bg-slate-900"
                : "bg-gradient-to-r from-cyan-600 to-blue-600"
            }
          `}
        >
          <p
            className={`leading-7 ${
              isAI ? "text-slate-200" : "text-white"
            }`}
          >
            {message}
          </p>

          {/* Attachment */}

          {attachment && (
            <div
              className="
                mt-5
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-3
              "
            >
              <Paperclip
                size={18}
                className="text-cyan-400"
              />

              <span className="text-sm text-white">
                {attachment}
              </span>
            </div>
          )}

          {/* Footer */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
            "
          >
            <span
              className={`text-xs ${
                isAI
                  ? "text-slate-500"
                  : "text-cyan-100"
              }`}
            >
              {time}
            </span>

            {isAI && (
              <div className="flex gap-2">

                <button
                  className="
                    rounded-lg
                    p-2
                    text-slate-400
                    transition
                    hover:bg-slate-800
                    hover:text-cyan-400
                  "
                >
                  <Copy size={16} />
                </button>

                <button
                  className="
                    rounded-lg
                    p-2
                    text-slate-400
                    transition
                    hover:bg-slate-800
                    hover:text-emerald-400
                  "
                >
                  <ThumbsUp size={16} />
                </button>

                <button
                  className="
                    rounded-lg
                    p-2
                    text-slate-400
                    transition
                    hover:bg-slate-800
                    hover:text-red-400
                  "
                >
                  <ThumbsDown size={16} />
                </button>

              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}