import { ChevronDown } from "lucide-react";

function Select({
  label,
  name,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  required = false,
  disabled = false,
  error = "",
  helperText = "",
  className = "",
}) {
  return (
    <div className="w-full">

      {label && (
        <label
          htmlFor={id || name}
          className="block mb-2 text-sm font-medium text-slate-300"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">

        <select
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            appearance-none
            w-full
            rounded-2xl
            bg-slate-900
            border
            ${
              error
                ? "border-red-500"
                : "border-slate-700"
            }
            px-5
            py-4
            pr-12
            text-white
            focus:outline-none
            focus:ring-2
            ${
              error
                ? "focus:ring-red-500/40"
                : "focus:ring-emerald-500/40"
            }
            focus:border-emerald-500
            transition-all
            duration-300
            disabled:opacity-50
            disabled:cursor-not-allowed
            ${className}
          `}
        >
          <option value="">
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-slate-900"
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={20}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            pointer-events-none
          "
        />

      </div>

      {helperText && !error && (
        <p className="mt-2 text-sm text-slate-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}

export default Select;