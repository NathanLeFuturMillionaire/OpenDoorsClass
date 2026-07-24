import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("x-chariow-signature");
  const body = await req.text();

  // TODO: vérifier la signature, puis déléguer à ChariowProvider.handleWebhook
  return NextResponse.json({ received: true });
}