import Link from "next/link";

interface AuthFooterProps {
  prompt: string;
  linkLabel: string;
  linkHref: string;
}

export function AuthFooter({ prompt, linkLabel, linkHref }: AuthFooterProps) {
  return (
    <p className="mt-6 text-center text-sm text-slate-500">
      {prompt}{" "}
      <Link href={linkHref} className="font-medium text-navy-950 hover:underline">
        {linkLabel}
      </Link>
    </p>
  );
}