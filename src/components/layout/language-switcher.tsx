"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { LOCALES } from "@/config/nav";

/**
 * Sélecteur de langue minimal. La logique de bascule i18n réelle (routing localisé,
 * next-intl ou équivalent) viendra se brancher ici sans changer l'interface du composant.
 */
export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(LOCALES[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choisir la langue"
        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-mist hover:text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-700/60"
      >
        <span aria-hidden="true">{active.flag}</span>
        <span>{active.code.toUpperCase()}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-black/5 bg-white py-1 shadow-lg"
        >
          {LOCALES.map((locale) => (
            <li key={locale.code}>
              <button
                type="button"
                role="option"
                aria-selected={active.code === locale.code}
                onClick={() => {
                  setActive(locale);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-mist"
              >
                <span aria-hidden="true">{locale.flag}</span>
                {locale.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}