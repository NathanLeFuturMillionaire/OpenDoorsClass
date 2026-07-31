import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthCard } from "@/components/auth/auth-card";
// import { Header } from "@/components/layout/header";
import { AuthHeader } from "@/components/auth/auth-header";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot your password? | OpenDoorsClass",
  description: "Enter your email address to receive reset instructions.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthHeader
          title="Forgot your password?"
          subtitle="Enter your email address to receive reset instructions."
        />
        <ForgotPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}