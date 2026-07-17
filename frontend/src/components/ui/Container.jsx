function Container({
  children,
  className = "",
  size = "xl",
}) {
  const sizes = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        mx-auto
        w-full
        px-6
        sm:px-8
        lg:px-10
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;