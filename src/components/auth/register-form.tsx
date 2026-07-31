"use client";

import { useState } from "react";
import { Loader2, UserPlus, Check, X } from "lucide-react";
import { AuthInput } from "@/components/auth/auth-input";
import { PasswordInput } from "@/components/auth/password-input";
import { PasswordStrength, isPasswordStrong } from "@/components/auth/password-strength";
import { CaptchaInput, generateCaptchaCode } from "@/components/auth/captcha-input";
import { SocialAuthButton } from "@/components/auth/social-auth-button";
import { AuthDivider } from "@/components/auth/auth-divider";
import { AuthFooter } from "@/components/auth/auth-footer";
import { GoogleIcon, FacebookIcon } from "@/components/auth/social-icons";
import type { RegisterFormData } from "@/lib/types/auth";

const initialState: RegisterFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Placeholder handlers only, for this frontend-only phase. The real OAuth
// redirect will replace these once the backend for social sign-in exists.
function handleGoogleSignIn() {
  console.log("TODO: connect to the Google OAuth backend flow.");
}

function handleFacebookSignIn() {
  console.log("TODO: connect to the Facebook OAuth backend flow.");
}

export function RegisterForm() {
  const [form, setForm] = useState<RegisterFormData>(initialState);
  const [touched, setTouched] = useState<Record<keyof RegisterFormData, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [captchaCode, setCaptchaCode] = useState(generateCaptchaCode());
  const [captchaValue, setCaptchaValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isFirstNameValid = form.firstName.trim().length > 0;
  const isLastNameValid = form.lastName.trim().length > 0;
  const isEmailValid = EMAIL_PATTERN.test(form.email.trim());
  const isPasswordOk = isPasswordStrong(form.password);
  const passwordsMatch = form.password.length > 0 && form.password === form.confirmPassword;
  const isCaptchaValid = captchaValue.trim().toUpperCase() === captchaCode;

  const isFormValid =
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordOk &&
    passwordsMatch &&
    isCaptchaValid;

  function markTouched(field: keyof RegisterFormData) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  // Frontend-only submit: no network call yet. This only exercises the
  // loading-state UI so it can be verified before the backend phase wires
  // this up to the real registration endpoint.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid || submitting) return;

    setSubmitting(true);
    // TODO: replace this timer with the real registration request.
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <AuthInput
            label="First Name"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={(value) => setForm((f) => ({ ...f, firstName: value }))}
            onBlur={() => markTouched("firstName")}
            touched={touched.firstName}
            error={!isFirstNameValid ? "Please enter your first name." : undefined}
            autoComplete="given-name"
          />
          <AuthInput
            label="Last Name"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={(value) => setForm((f) => ({ ...f, lastName: value }))}
            onBlur={() => markTouched("lastName")}
            touched={touched.lastName}
            error={!isLastNameValid ? "Please enter your last name." : undefined}
            autoComplete="family-name"
          />
        </div>

        <AuthInput
          label="Email Address"
          placeholder="you@example.com"
          type="email"
          value={form.email}
          onChange={(value) => setForm((f) => ({ ...f, email: value }))}
          onBlur={() => markTouched("email")}
          touched={touched.email}
          error={!isEmailValid ? "Please enter a valid email address." : undefined}
          autoComplete="email"
        />

        <div>
          <PasswordInput
            label="Password"
            placeholder="Create a password"
            value={form.password}
            onChange={(value) => setForm((f) => ({ ...f, password: value }))}
            onBlur={() => markTouched("password")}
            autoComplete="new-password"
          />
          <PasswordStrength password={form.password} />
        </div>

        <div>
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={(value) => setForm((f) => ({ ...f, confirmPassword: value }))}
            onBlur={() => markTouched("confirmPassword")}
            autoComplete="new-password"
          />
          {form.confirmPassword.length > 0 && (
            <p
              className={`mt-1.5 flex items-center gap-1.5 text-xs ${
                passwordsMatch ? "text-green-600" : "text-red-500"
              }`}
            >
              {passwordsMatch ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
              {passwordsMatch ? "Passwords match" : "Passwords do not match"}
            </p>
          )}
        </div>

        <CaptchaInput
          value={captchaValue}
          onChange={setCaptchaValue}
          code={captchaCode}
          onRegenerate={() => {
            setCaptchaCode(generateCaptchaCode());
            setCaptchaValue("");
          }}
        />

        <button
          type="submit"
          disabled={!isFormValid || submitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-navy-950 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            <>
              <UserPlus className="h-4 w-4" />
              Create account
            </>
          )}
        </button>

        <AuthFooter
          prompt="Already have an account?"
          linkLabel="Sign in"
          linkHref="/login"
        />
      </form>
    </div>
  );
}