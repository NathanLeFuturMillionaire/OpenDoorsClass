import { Logo } from "@/components/layout/logo";
import { AuthHeroVisual } from "@/components/auth/auth-hero-visual"; // Directement importé ici

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <section className="relative hidden flex-col justify-center overflow-hidden bg-mist/40 px-12 py-16 lg:flex">
        <Logo />
        <h2 className="mt-10 max-w-sm font-display text-2xl font-extrabold leading-tight tracking-tight text-navy-950">
          Learn. Practice. Grow.
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
          Join a structured English learning journey built around real
          practice, human coaching and steady progress.
        </p>
        <div className="mt-12">
          <AuthHeroVisual />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-4 py-16 sm:px-6">
        <div className="mb-8 lg:hidden">
          <Logo />
        </div>
        {children}
      </section>
    </main>
  );
}