"use client";

import { Check, Circle } from "lucide-react";

// This 8-character rule is specific to this new authentication interface.
// The backend routes built in an earlier phase still enforce a 6-character
// minimum (see src/lib/validation/auth.ts) — reconcile the two once this
// frontend is actually wired to the backend.
export const passwordStrengthCriteria = {
  minLength: (value: string) => value.length >= 8,
  hasUppercase: (value: string) => /[A-Z]/.test(value),
  hasLowercase: (value: string) => /[a-z]/.test(value),
  hasNumber: (value: string) => /[0-9]/.test(value),
  hasSpecialChar: (value: string) => /[^A-Za-z0-9]/.test(value),
};

export function isPasswordStrong(value: string): boolean {
  return Object.values(passwordStrengthCriteria).every((check) => check(value));
}

const CRITERIA_LIST: { key: keyof typeof passwordStrengthCriteria; label: string }[] = [
  { key: "minLength", label: "Minimum 8 characters" },
  { key: "hasUppercase", label: "One uppercase letter" },
  { key: "hasLowercase", label: "One lowercase letter" },
  { key: "hasNumber", label: "One number" },
  { key: "hasSpecialChar", label: "One special character" },
];

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  return (
    <ul className="mt-2.5 space-y-1">
      {CRITERIA_LIST.map(({ key, label }) => {
        const met = passwordStrengthCriteria[key](password);
        return (
          <li
            key={key}
            className={`flex items-center gap-1.5 text-xs transition-colors duration-200 ${
              met ? "text-green-600" : "text-slate-400"
            }`}
          >
            {met ? <Check className="h-3 w-3" /> : <Circle className="h-3 w-3" />}
            {label}
          </li>
        );
      })}
    </ul>
  );
}