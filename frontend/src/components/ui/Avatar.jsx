function Avatar({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  status,
  className = "",
}) {
  const sizes = {
    xs: "w-8 h-8 text-xs",
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-lg",
    lg: "w-20 h-20 text-2xl",
    xl: "w-28 h-28 text-4xl",
  };

  const statusColors = {
    online: "bg-emerald-500",
    offline: "bg-slate-500",
    busy: "bg-red-500",
    away: "bg-yellow-500",
  };

  const initials = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "?";

  return (
    <div className={`relative inline-block ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            ${sizes[size]}
            rounded-full
            object-cover
            border-2
            border-emerald-500/30
            shadow-lg
          `}
        />
      ) : (
        <div
          className={`
            ${sizes[size]}
            rounded-full
            flex
            items-center
            justify-center
            bg-gradient-to-br
            from-emerald-500
            to-emerald-700
            text-white
            font-bold
            shadow-lg
          `}
        >
          {initials}
        </div>
      )}

      {status && (
        <span
          className={`
            absolute
            bottom-0
            right-0
            w-4
            h-4
            rounded-full
            border-2
            border-slate-900
            ${statusColors[status]}
          `}
        />
      )}
    </div>
  );
}

export default Avatar;