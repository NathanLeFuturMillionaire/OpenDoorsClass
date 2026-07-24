import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenDoorsClass",
  description: "Plateforme éducative EdTech haut de gamme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#111827] dark:bg-[#0B0E14] dark:text-[#F9FAFB]">
        {children}
      </body>
    </html>
  );
}