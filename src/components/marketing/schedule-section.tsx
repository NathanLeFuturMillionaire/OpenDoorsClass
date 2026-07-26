import { CalendarCarousel } from "@/components/marketing/calendar-carousel";

export function ScheduleSection() {
  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Un calendrier, pensé sur mesure
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Parce que progresser en anglais demande de la régularité,
          OpenDoorsClass organise votre apprentissage autour d&apos;un
          calendrier clair et structuré. Trois séances de deux heures chaque
          semaine, aux horaires définis avec vous, pour transformer votre
          motivation en véritables progrès.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6 lg:px-8">
        <CalendarCarousel />
      </div>
    </section>
  );
}