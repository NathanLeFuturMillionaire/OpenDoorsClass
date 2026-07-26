"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { NavLinks } from "@/components/layout/nav-links";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-black/5 bg-paper/80 shadow-[0_1px_20px_rgba(10,15,30,0.06)] backdrop-blur-md"
          : "border-transparent bg-paper/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Logo />

        <NavLinks className="hidden items-center gap-7 md:flex" />

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />

          <Button
            variant="ghost"
            className="hidden text-sm font-medium text-slate-700 hover:text-navy-950 sm:inline-flex"
            asChild
          >
            <a href="/login">Se connecter</a>
          </Button>

          <Button
            className="hidden bg-navy-950 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-navy-900 sm:inline-flex"
            asChild
          >
            <a href="/commencer">Débuter un cours</a>
          </Button>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}