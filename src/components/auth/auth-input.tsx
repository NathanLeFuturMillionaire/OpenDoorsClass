"use client";

import { useId } from "react";
import { Check, AlertCircle } from "lucide-react";

interface AuthInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  type?: "text" | "email";
  autoComplete?: string;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
}

export function AuthInput({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  type = "text",
  autoComplete,
  error,
  touched,
  disabled = false,
}: AuthInputProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hasError = Boolean(touched && error);
  const isSuccess = Boolean(touched && !error && value.trim().length > 0);

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-950">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`h-12 w-full rounded-xl border bg-white px-4 pr-10 text-[0.95rem] text-navy-950 placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-mist disabled:text-slate-400 ${
            hasError
              ? "border-red-300 focus:ring-red-200"
              : "border-black/10 focus:border-gold-600/50 focus:ring-gold-600/20"
          }`}
        />
        {(isSuccess || hasError) && (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
            {isSuccess ? (
              <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" aria-hidden="true" />
            )}
          </span>
        )}
      </div>
      {hasError && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}