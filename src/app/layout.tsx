import type { Metadata } from "next";
import { 
  Inter, 
  Manrope, 
  JetBrains_Mono, 
  Plus_Jakarta_Sans, 
  Merriweather, 
  Caveat 
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });
const merriweather = Merriweather({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-serif" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-handwriting" });

export const metadata: Metadata = {
  title: "OpenDoorsClass - Débutez votre apprentissage des langues étrangères",
  description:
    "Maîtrisez une langue avec une méthode structurée, un vrai coach et une communauté internationale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="fr" 
      className={`
        ${inter.variable} 
        ${manrope.variable} 
        ${jetbrainsMono.variable} 
        ${jakarta.variable} 
        ${merriweather.variable} 
        ${caveat.variable}
      `}
    >
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}