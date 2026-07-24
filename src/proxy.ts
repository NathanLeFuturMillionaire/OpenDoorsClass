import { NextResponse } from "next/server";

export default function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: [], // Ne s'exécute sur AUCUNE route, aucun impact sur les performances
};