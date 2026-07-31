"use client";

import { useId, useState } from "react";
import { RefreshCw, Check, X } from "lucide-react";

const CAPTCHA_CHARSET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateCaptchaCode(): string {
  let code = "";
  for (let i = 0; i < 5; i += 1) {
    code += CAPTCHA_CHARSET[Math.floor(Math.random() * CAPTCHA_CHARSET.length)];
  }
  return code;
}

interface CaptchaInputProps {
  value: string;
  onChange: (value: string) => void;
  code: string;
  onRegenerate: () => void;
}

export function CaptchaInput({ value, onChange, code, onRegenerate }: CaptchaInputProps) {
  const id = useId();
  const [touched, setTouched] = useState(false);

  const isCorrect = value.trim().toUpperCase() === code;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-950">
        Security check
      </label>
      <div className="flex items-center gap-3">
        {/* suppressHydrationWarning autorise le texte dynamic entre le SSR et le Client sans bloquer React */}
        <div 
          suppressHydrationWarning
          className="flex h-12 select-none items-center justify-center rounded-xl bg-navy-950 px-5 font-mono text-lg font-bold tracking-[0.3em] text-white"
        >
          {code}
        </div>
        <button
          type="button"
          onClick={onRegenerate}
          aria-label="Generate a new code"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 text-slate-500 transition-colors hover:bg-mist hover:text-navy-950"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      <div className="relative mt-3">
        <input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="Enter the code above"
          autoComplete="off"
          className={`h-12 w-full rounded-xl border bg-white px-4 pr-10 text-[0.95rem] uppercase tracking-widest text-navy-950 placeholder:normal-case placeholder:tracking-normal placeholder:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 ${
            touched && !isCorrect
              ? "border-red-300 focus:ring-red-200"
              : "border-black/10 focus:border-gold-600/50 focus:ring-gold-600/20"
          }`}
        />
        {touched && value.length > 0 && (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
            {isCorrect ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <X className="h-4 w-4 text-red-500" />
            )}
          </span>
        )}
      </div>
      {touched && value.length > 0 && !isCorrect && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-red-500">
          This code does not match. Please try again.
        </p>
      )}
    </div>
  );
}

export { generateCaptchaCode };