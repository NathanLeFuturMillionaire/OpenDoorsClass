import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Ne jamais faire confiance uniquement à la validation côté client :
// tout est revérifié ici, côté serveur.
function validatePayload(payload: ContactPayload): string | null {
  if (!payload.firstName || payload.firstName.trim().length < 2) {
    return "Le prénom est invalide.";
  }
  if (!payload.lastName || payload.lastName.trim().length < 2) {
    return "Le nom est invalide.";
  }
  if (!payload.email || !EMAIL_PATTERN.test(payload.email.trim())) {
    return "L'adresse e-mail est invalide.";
  }
  if (!payload.message || payload.message.trim().length < 10) {
    return "Le message est trop court.";
  }
  if (payload.message.length > 1000) {
    return "Le message dépasse la longueur autorisée.";
  }
  return null;
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  // TODO — brancher l'envoi d'email réel ici (par ex. Resend), en lisant
  // les identifiants UNIQUEMENT depuis les variables d'environnement serveur :
  //
  //   CONTACT_EMAIL=
  //   RESEND_API_KEY=
  //
  // Exemple (à décommenter une fois le compte Resend configuré) :
  //
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "OpenDoorsClass <contact@opendoorsclass.com>",
  //   to: process.env.CONTACT_EMAIL!,
  //   subject: `Nouveau message de ${payload.firstName} ${payload.lastName}`,
  //   text: payload.message,
  // });
  //
  // En attendant cette intégration, on journalise seulement côté serveur
  // (jamais renvoyé au client) pour ne pas perdre les messages en dev.
  console.log("[contact] Nouveau message reçu :", {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
  });

  // TODO — anti-spam : ajouter ici un rate limiting (par IP) et/ou un champ
  // honeypot invisible côté formulaire, avant un passage en production.

  return NextResponse.json({ success: true }, { status: 200 });
}