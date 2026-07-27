"use client";

import { useId } from "react";
import { Check, AlertCircle } from "lucide-react";

interface ContactFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  touched: boolean;
  error?: string;
  type?: "text" | "email";
  autoComplete?: string;
}

export function ContactField({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  touched,
  error,
  type = "text",
  autoComplete,
}: ContactFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hasError = touched && !!error;
  const isValid = touched && !error && value.trim().length > 0;

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
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`h-12 w-full rounded-xl border bg-white px-4 pr-10 text-[0.95rem] text-navy-950 placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 ${
            hasError
              ? "border-red-300 focus:ring-red-200"
              : "border-black/10 focus:border-gold-600/50 focus:ring-gold-600/20"
          }`}
        />
        {(isValid || hasError) && (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
            {isValid ? (
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