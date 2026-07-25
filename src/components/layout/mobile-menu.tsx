"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/components/layout/nav-links";
import { Logo } from "@/components/layout/logo";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Pas de <Button> imbriqué ici : SheetTrigger rend déjà son propre <button>.
          On applique juste les classes de style (buttonVariants) directement dessus,
          pour éviter un <button> dans un <button> (invalide en HTML). */}
      <SheetTrigger
        aria-label="Ouvrir le menu"
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm bg-paper">
        <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
        <div className="flex h-full flex-col">
          <div className="border-b border-black/5 px-1 pb-6">
            <Logo />
          </div>
          <NavLinks
            onNavigate={() => setOpen(false)}
            className="flex flex-1 flex-col gap-1 py-6 [&_a]:py-3 [&_a]:text-base"
          />
          <div className="flex flex-col gap-3 border-t border-black/5 pt-6">
            <Button variant="outline" className="w-full" asChild>
              <a href="/connexion">Se connecter</a>
            </Button>
            <Button className="w-full bg-navy-950 hover:bg-navy-900" asChild>
              <a href="/commencer">Commencer</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}