"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/config/nav";

interface NavLinksProps {
  className?: string;
  onNavigate?: () => void;
}

export function NavLinks({ className, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Navigation principale">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className="group relative py-2 text-[0.925rem] font-medium text-slate-600 transition-colors duration-200 hover:text-navy-950 data-[active=true]:text-navy-950"
            data-active={isActive}
          >
            {item.label}
            <span
              className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-700 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                isActive ? "scale-x-100" : ""
              }`}
              aria-hidden="true"
            />
          </Link>
        );
      })}
    </nav>
  );
}