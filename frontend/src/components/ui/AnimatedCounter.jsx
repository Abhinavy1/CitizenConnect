import CountUp from "react-countup";

function AnimatedCounter({
  value = 0,
  start = 0,
  duration = 2.5,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className = "",
}) {
  return (
    <span className={className}>
      {prefix}

      <CountUp
        start={start}
        end={value}
        duration={duration}
        decimals={decimals}
        separator={separator}
      />

      {suffix}
    </span>
  );
}

export default AnimatedCounter;