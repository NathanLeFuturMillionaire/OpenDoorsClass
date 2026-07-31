import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Header } from "@/components/layout/header";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthHeader } from "@/components/auth/auth-header";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Create your OpenDoorsClass account",
  description: "Start your language learning journey today.",
};

export default function RegisterPage() {
  return (
    <>
      <Header />
      <AuthLayout>
        <AuthCard>
          <AuthHeader
            title="Create your OpenDoorsClass account"
            subtitle="Start your language learning journey today."
          />
          <RegisterForm />
        </AuthCard>
      </AuthLayout>
    </>
  );
}