import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="space-y-4">

      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-slate-800
          py-4
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-slate-700
        "
      >
        <FaGoogle size={18} />

        Continue with Google

      </button>

      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-slate-800
          py-4
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-slate-700
        "
      >
        <FaGithub size={18} />

        Continue with GitHub

      </button>

    </div>
  );
}