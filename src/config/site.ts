export const CONTACT_INFO = {
  whatsappNumber: "+24174825725", // +241 74 82 57 25, sans espaces pour le lien wa.me
  whatsappDisplay: "+241 74 82 57 25",
};

export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${CONTACT_INFO.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}