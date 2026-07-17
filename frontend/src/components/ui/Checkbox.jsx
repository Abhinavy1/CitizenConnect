import { Check } from "lucide-react";

function Checkbox({
  checked = false,
  onChange,
  label,
  name,
  disabled = false,
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">

      <div className="relative">

        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="peer sr-only"
        />

        <div
          className="
            h-5
            w-5
            rounded-md
            border
            border-slate-600
            bg-slate-900
            transition-all
            peer-checked:border-emerald-500
            peer-checked:bg-emerald-500
          "
        />

        <Check
          size={14}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-black
            opacity-0
            peer-checked:opacity-100
          "
        />

      </div>

      <span className="text-sm text-slate-300">
        {label}
      </span>

    </label>
  );
}

export default Checkbox;