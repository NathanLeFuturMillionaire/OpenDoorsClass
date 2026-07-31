"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { Loader2, LogIn } from "lucide-react";
import { AuthInput } from "@/components/auth/auth-input";
import { PasswordInput } from "@/components/auth/password-input";
import { SocialAuthButton } from "@/components/auth/social-auth-button";
import { AuthDivider } from "@/components/auth/auth-divider";
import { AuthFooter } from "@/components/auth/auth-footer";
import { GoogleIcon, FacebookIcon } from "@/components/auth/social-icons";
import type { LoginFormData } from "@/lib/types/auth";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Placeholder handlers only, ready to be wired to the real backend
function handleGoogleSignIn() {
  console.log("TODO: connect to the Google OAuth backend flow.");
}

function handleFacebookSignIn() {
  console.log("TODO: connect to the Facebook OAuth backend flow.");
}

export function LoginForm() {
  const rememberId = useId();
  const [form, setForm] = useState<LoginFormData>({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [rememberMe, setRememberMe] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isEmailValid = EMAIL_PATTERN.test(form.email.trim());
  const isPasswordFilled = form.password.length > 0;
  const isFormValid = isEmailValid && isPasswordFilled;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid || submitting) return;

    setSubmitting(true);
    window.setTimeout(() => setSubmitting(false), 1200);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <SocialAuthButton
          icon={<GoogleIcon className="h-5 w-5" />}
          label="Continue with Google"
          onClick={handleGoogleSignIn}
        />
        <SocialAuthButton
          icon={<FacebookIcon className="h-5 w-5" />}
          label="Continue with Facebook"
          onClick={handleFacebookSignIn}
        />
      </div>

      <AuthDivider />

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <AuthInput
          label="Email Address"
          placeholder="you@example.com"
          type="email"
          value={form.email}
          onChange={(value) => setForm((f) => ({ ...f, email: value }))}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          touched={touched.email}
          error={!isEmailValid ? "Please enter a valid email address." : undefined}
          autoComplete="email"
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(value) => setForm((f) => ({ ...f, password: value }))}
          onBlur={() => setTouched((t) => ({ ...t, password: true }))}
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between">
          <label htmlFor={rememberId} className="flex items-center gap-2 text-sm text-slate-600">
            <input
              id={rememberId}
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-black/20 text-navy-950 focus:ring-2 focus:ring-gold-600/30"
            />
            Remember me
          </label>
          <Link href="/forgot-password" className="text-sm font-medium text-slate-500 hover:text-navy-950">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={!isFormValid || submitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-navy-950 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              <LogIn className="h-4 w-4" />
              Sign in
            </>
          )}
        </button>

        <AuthFooter
          prompt="Don't have an account?"
          linkLabel="Create one"
          linkHref="/register"
        />
      </form>
    </div>
  );
}