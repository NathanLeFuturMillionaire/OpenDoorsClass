import type { NextConfig } from "next";

const securityHeaders = [
  // Empêche le site d'être affiché dans une <iframe> externe (protection clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Empêche le navigateur de deviner le type MIME d'un fichier (protection contre certains XSS)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Limite les informations envoyées dans le Referer lors de la navigation vers un autre site
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Désactive par défaut l'accès aux capteurs sensibles (caméra, micro, géolocalisation...)
  // À assouplir plus tard uniquement pour les routes qui en ont réellement besoin
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Force HTTPS pendant 2 ans, y compris pour les sous-domaines (à activer une fois le domaine en prod stable)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Content-Security-Policy : à resserrer au fil du projet (paiement Chariow, analytics...)
  // Version de base compatible Next.js (autorise les scripts/styles inline nécessaires au framework)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Toutes les pages du site (Header, Hero, About, Programs, Pricing...)
      // pointent encore vers /test-de-niveau. Plutôt que de modifier chaque
      // lien un par un, on redirige proprement vers la vraie page /leveltest.
      {
        source: "/test-de-niveau",
        destination: "/leveltest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;