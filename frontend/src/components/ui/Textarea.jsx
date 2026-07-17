function Textarea({
  label,
  placeholder = "",
  value,
  onChange,
  name,
  id,
  rows = 5,
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

      <textarea
        id={id || name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
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
          text-white
          placeholder:text-slate-500
          resize-none
          focus:outline-none
          ${
            error
              ? "focus:ring-2 focus:ring-red-500/40"
              : "focus:ring-2 focus:ring-emerald-500/40"
          }
          focus:border-emerald-500
          transition-all
          duration-300
          disabled:opacity-50
          disabled:cursor-not-allowed
          ${className}
        `}
      />

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

export default Textarea;