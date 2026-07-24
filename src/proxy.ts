import { NextResponse } from "next/server";

export default function proxy() {
  // Laisse passer toutes les requêtes directement vers page.tsx
  return NextResponse.next();
}

export const config = {
  // Ne cible rien de particulier, laisse l'App Router gérer les routes
  matcher: [],
};Remove-Item -Recurse -Force .next