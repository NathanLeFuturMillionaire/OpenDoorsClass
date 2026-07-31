interface AuthCardProps {
  children: React.ReactNode;
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-black/5 bg-white p-7 shadow-[0_25px_60px_-30px_rgba(10,15,30,0.3)] sm:p-9">
      {children}
    </div>
  );
}