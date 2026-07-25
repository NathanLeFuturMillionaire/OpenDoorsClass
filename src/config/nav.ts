export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Programmes", href: "/programmes" },
  { label: "Offres", href: "/offres" },
  { label: "Test de niveau", href: "/test-de-niveau" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export interface Locale {
  code: string;
  label: string;
  flag: string;
}

export const LOCALES: Locale[] = [
  { code: "fr", label: "Français", flag: "🌍" },
  { code: "en", label: "English", flag: "🇬🇧" },
];