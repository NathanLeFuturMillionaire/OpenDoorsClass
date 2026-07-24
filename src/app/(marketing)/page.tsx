import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      {/* Brand Badge */}
      <div className="text-2xl font-heading font-bold text-primary">
        OpenDoorsClass
      </div>

      {/* Titre principal avec la police Sora (heading) */}
      <h1 className="max-w-2xl text-4xl font-heading font-bold text-gray-900 dark:text-white sm:text-5xl">
        Apprenez une langue, ensemble, au même rythme.
      </h1>

      {/* Paragraphe explicatif */}
      <p className="max-w-xl text-gray-600 dark:text-gray-400">
        Une pédagogie synchronisée, un calendrier structuré, un accompagnement humain.
      </p>

      {/* Bouton d'action CTA */}
      <Link
        href="/register"
        className="rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90 shadow-sm hover:shadow-lg"
      >
        Commencer
      </Link>
    </main>
  );
}