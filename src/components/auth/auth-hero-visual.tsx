"use client";

export function AuthHeroVisual() {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-8 shadow-2xl shadow-navy-950/20">
      {/* Motifs de fond lumineux et grille géométrique */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-navy-600/30 blur-3xl" />
      
      {/* Pattern subtil en arrière-plan */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-between space-y-12">
        <div className="space-y-3">
          <div className="inline-block rounded-full bg-gold-500/10 px-3 py-1 text-xs font-mono font-medium tracking-wider text-gold-400 border border-gold-500/20">
            ENGLISH ACADEMY
          </div>
          <h3 className="font-display text-3xl font-bold tracking-tight text-white">
            OpenDoors<span className="text-gold-400">Class</span>
          </h3>
          <p className="text-sm leading-relaxed text-slate-300">
            Unlock your professional potential with confidence, clarity, and master-level English fluency.
          </p>
        </div>

        {/* Ligne décorative dorée */}
        <div className="flex items-center gap-3 pt-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-gold-500 to-transparent" />
          <span className="text-xs font-medium tracking-widest text-slate-400 uppercase">
            Empowering Your Future
          </span>
        </div>
      </div>
    </div>
  );
}