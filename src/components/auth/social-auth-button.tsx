"use client";

interface SocialAuthButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export function SocialAuthButton({ icon, label, onClick }: SocialAuthButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-black/10 bg-white text-sm font-medium text-navy-950 transition-colors duration-200 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600/30"
    >
      {icon}
      {label}
    </button>
  );
}