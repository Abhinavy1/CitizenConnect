function GridPattern({
  className = "",
  opacity = 0.05,
}) {
  return (
    <div
      className={`
        absolute
        inset-0
        pointer-events-none
        ${className}
      `}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
}

export default GridPattern;