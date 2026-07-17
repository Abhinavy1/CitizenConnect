import { Search, X } from "lucide-react";

function SearchBox({
  value,
  onChange,
  placeholder = "Search...",
  onClear,
  className = "",
}) {
  return (
    <div
      className={`
        relative
        w-full
        ${className}
      `}
    >
      {/* Search Icon */}

      <Search
        size={20}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      {/* Input */}

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          bg-slate-900
          border
          border-slate-700
          rounded-2xl
          py-3
          pl-12
          pr-12
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          duration-300
          focus:border-emerald-500
          focus:ring-2
          focus:ring-emerald-500/20
        "
      />

      {/* Clear Button */}

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            hover:text-white
            transition
          "
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default SearchBox;