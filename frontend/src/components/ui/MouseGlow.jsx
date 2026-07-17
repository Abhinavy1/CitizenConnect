import { useEffect, useRef } from "react";

function MouseGlow({
  size = 350,
  color = "emerald",
}) {
  const glowRef = useRef(null);

  const colors = {
    emerald: "rgba(16,185,129,.18)",
    blue: "rgba(59,130,246,.18)",
    purple: "rgba(168,85,247,.18)",
    cyan: "rgba(6,182,212,.18)",
  };

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    let x = 0;
    let y = 0;
    let frame;

    const move = (e) => {
      x = e.clientX - size / 2;
      y = e.clientY - size / 2;

      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, [size]);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-0"
      style={{
        width: size,
        height: size,
        borderRadius: "9999px",
        background: colors[color],
        filter: "blur(80px)",
        transition: "transform 120ms linear",
      }}
    />
  );
}

export default MouseGlow;