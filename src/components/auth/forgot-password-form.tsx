"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { AuthInput } from "@/components/auth/auth-input";
import { AuthFooter } from "@/components/auth/auth-footer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Interface only, as requested for this phase: no request is sent yet.
export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isEmailValid = EMAIL_PATTERN.test(email.trim());

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    // TODO: connect to the real password reset request once the backend exists.
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <AuthInput
        label="Email"
        placeholder="you@example.com"
        type="email"
        value={email}
        onChange={setEmail}
        onBlur={() => setTouched(true)}
        touched={touched}
        error={!isEmailValid ? "Please enter a valid email address." : undefined}
        autoComplete="email"
      />

      <button
        type="submit"
        disabled={!isEmailValid}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-navy-950 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
      >
        <Send className="h-4 w-4" />
        Send reset link
      </button>

      <AuthFooter prompt="Remembered your password?" linkLabel="Sign in" linkHref="/login" />
    </form>
  );
}