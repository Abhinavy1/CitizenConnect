import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  id,
  required = false,
  disabled = false,
  error = "",
  helperText = "",
  leftIcon,
  className = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full">

      {label && (
        <label
          htmlFor={id || name}
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          {label}
          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">

        {leftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            {leftIcon}
          </div>
        )}

        <input
          id={id || name}
          name={name}
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            py-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            focus:border-cyan-400
            focus:ring-4
            focus:ring-cyan-500/20
            ${
              leftIcon
                ? "pl-12"
                : "pl-5"
            }
            ${
              isPassword
                ? "pr-12"
                : "pr-5"
            }
            ${className}
          `}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}

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

export default Input;