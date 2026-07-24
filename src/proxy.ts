import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Laisse passer les requêtes directement vers src/app/(marketing)/page.tsx
  return NextResponse.next();
}

export const config = {
  // Ne cible aucune route pour laisser l'App Router gérer l'accueil normalement
  matcher: [],
};