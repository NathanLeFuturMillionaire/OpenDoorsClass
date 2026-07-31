"use client";

import { useId, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  autoComplete?: string;
  error?: string;
  touched?: boolean;
}

export function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  autoComplete,
  error,
  touched,
}: PasswordInputProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const [visible, setVisible] = useState(false);
  const hasError = Boolean(touched && error);

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-950">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`h-12 w-full rounded-xl border bg-white px-4 pr-11 text-[0.95rem] text-navy-950 transition-colors duration-200 focus:outline-none focus:ring-2 ${
            hasError
              ? "border-red-300 focus:ring-red-200"
              : "border-black/10 focus:border-gold-600/50 focus:ring-gold-600/20"
          }`}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-150 hover:text-navy-950"
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {hasError && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}