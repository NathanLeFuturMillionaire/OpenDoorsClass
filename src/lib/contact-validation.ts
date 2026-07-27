export const MESSAGE_MAX_LENGTH = 1000;

/** Nom : converti intégralement en MAJUSCULES au fil de la saisie. */
export function formatLastName(value: string): string {
  return value.toUpperCase();
}

/**
 * Prénom : chaque mot commence par une majuscule (gère les noms composés
 * séparés par un espace ou un tiret), sans détruire les accents.
 */
export function formatFirstName(value: string): string {
  return value
    .toLowerCase()
    .split(/([\s-])/)
    .map((part) =>
      part && part !== " " && part !== "-"
        ? part.charAt(0).toLocaleUpperCase("fr-FR") + part.slice(1)
        : part,
    )
    .join("");
}

/**
 * Message : seule la toute première lettre est mise en majuscule ; le reste
 * de la saisie n'est jamais modifié. Les espaces de tête sont retirés avant
 * d'évaluer la première lettre.
 */
export function formatMessage(value: string): string {
  const withoutLeadingSpaces = value.replace(/^\s+/, "");
  if (withoutLeadingSpaces.length === 0) return withoutLeadingSpaces;
  return (
    withoutLeadingSpaces.charAt(0).toLocaleUpperCase("fr-FR") + withoutLeadingSpaces.slice(1)
  );
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function validateLastName(value: string): ValidationResult {
  if (value.trim().length < 2) {
    return { valid: false, error: "Veuillez indiquer votre nom." };
  }
  return { valid: true };
}

export function validateFirstName(value: string): ValidationResult {
  if (value.trim().length < 2) {
    return { valid: false, error: "Veuillez indiquer votre prénom." };
  }
  return { valid: true };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEmail(value: string): ValidationResult {
  if (!EMAIL_PATTERN.test(value.trim())) {
    return { valid: false, error: "Veuillez saisir une adresse e-mail valide." };
  }
  return { valid: true };
}

export function validateMessage(value: string): ValidationResult {
  const trimmed = value.trim();
  if (trimmed.length < 10) {
    return { valid: false, error: "Votre message semble incomplet." };
  }
  if (trimmed.length > MESSAGE_MAX_LENGTH) {
    return { valid: false, error: `Votre message dépasse ${MESSAGE_MAX_LENGTH} caractères.` };
  }
  return { valid: true };
}