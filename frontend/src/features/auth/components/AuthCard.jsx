export default function AuthCard({
  title,
  subtitle,
  children,
}) {
  return (
    <div
      className="
        rounded-[36px]
        border
        border-white/10
        bg-slate-900/80
        p-10
        backdrop-blur-2xl
        shadow-[0_25px_80px_rgba(0,0,0,.45)]
      "
    >
      <h1 className="text-4xl font-black text-white">
        {title}
      </h1>

      <p className="mt-4 leading-7 text-slate-400">
        {subtitle}
      </p>

      <div className="mt-10">
        {children}
      </div>
    </div>
  );
}