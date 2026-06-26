import { BookingButton } from "@/components/BookingButton";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to schedule your first visit?",
  description = "Book online through Square Appointments. The link is a placeholder and can be updated in the content settings."
}: CTASectionProps) {
  return (
    <section className="bg-forestDeep px-5 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-champagne">Book Online</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">{title}</h2>
          <p className="mt-4 leading-8 text-white/72">{description}</p>
        </div>
        <BookingButton className="bg-champagne text-forestDeep hover:bg-white" />
      </div>
    </section>
  );
}
