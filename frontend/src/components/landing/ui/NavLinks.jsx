const links = [
  "Platform",
  "Features",
  "Solutions",
  "Security",
  "Contact",
];

export default function NavLinks() {
  return (
    <div className="hidden items-center gap-10 lg:flex">

      {links.map((item) => (

        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="
          relative
          text-sm
          font-medium
          text-slate-300
          transition-all
          duration-300
          hover:text-white
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-cyan-400
          after:transition-all
          hover:after:w-full
        "
        >
          {item}
        </a>

      ))}

    </div>
  );
}