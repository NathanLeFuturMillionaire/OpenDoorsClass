import Link from "next/link";

interface LogoProps {
  className?: string;
}

/**
 * Placeholder de marque : deux arcs entrelacés évoquant une "porte ouverte" (Open Doors).
 * À remplacer par le logo final — la structure (mark + wordmark) ne changera pas.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="OpenDoorsClass - retour à l'accueil"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M17 3C9.268 3 3 9.268 3 17c0 6.24 4.06 11.53 9.686 13.37"
          stroke="#0A0F1E"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M17 31c7.732 0 14-6.268 14-14 0-6.24-4.06-11.53-9.686-13.37"
          stroke="#B8924A"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="17" cy="17" r="3.2" fill="#0A0F1E" />
      </svg>
      <span className="font-display text-[1.15rem] font-extrabold tracking-tight text-navy-950">
        OpenDoors<span className="text-gold-700">Class</span>
      </span>
    </Link>
  );
}