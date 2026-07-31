import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthHeader } from "@/components/auth/auth-header";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Welcome back | OpenDoorsClass",
  description: "Continue your OpenDoorsClass journey.",
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <AuthLayout>
        <AuthCard>
          <AuthHeader 
            title="Welcome back" 
            subtitle="Continue your OpenDoorsClass journey." 
          />
          <LoginForm />
        </AuthCard>
      </AuthLayout>
    </>
  );
}