export function AuthDivider() {
  return (
    <div className="flex items-center gap-3" role="separator">
      <div className="h-px flex-1 bg-black/10" aria-hidden="true" />
      <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Or</span>
      <div className="h-px flex-1 bg-black/10" aria-hidden="true" />
    </div>
  );
}