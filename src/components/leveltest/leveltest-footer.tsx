import { LEVELTEST_FOOTER_LINKS } from "@/lib/leveltest-content";

export function LevelTestFooter() {
  return (
    <footer className="border-t border-black/5 bg-paper py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-sm font-extrabold tracking-tight text-navy-950">
            OpenDoorsClass
          </p>
          <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-slate-400">
            Learn. Practice. Grow.
          </p>
        </div>

        <nav aria-label="Liens du pied de page" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {LEVELTEST_FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-500 transition-colors hover:text-navy-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mt-6 text-center text-xs text-slate-400">
        © 2026 OpenDoorsClass. Tous droits réservés.
      </p>
    </footer>
  );
}