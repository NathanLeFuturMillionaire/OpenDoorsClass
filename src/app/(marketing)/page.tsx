export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="text-2xl font-heading font-bold text-primary">
        OpenDoorsClass
      </div>
      <h1 className="max-w-2xl text-4xl font-heading font-bold sm:text-5xl">
        Apprenez une langue, ensemble, au même rythme.
      </h1>
      <p className="max-w-xl text-muted-foreground">
        Une pédagogie synchronisée, un calendrier structuré, un accompagnement humain.
      </p>
      <button className="rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90">
        Commencer
      </button>
    </main>
  );
}