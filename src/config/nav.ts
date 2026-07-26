export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Programmes", href: "/programs" },
  { label: "Offres", href: "/pricing" },
  { label: "Test de niveau", href: "/leveltest" },
  { label: "FAQ", href: "/questions" },
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