import { BookingButton } from "@/components/BookingButton";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section className="bg-ivory px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-champagne">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-forestDeep md:text-5xl">
            Visit {site.name}
          </h2>
          <p className="mt-5 leading-8 text-charcoal/70">
            Please use online booking for appointments. This first version avoids collecting detailed health information through a general contact form.
          </p>
          <BookingButton className="mt-6" />
        </div>
        <div className="grid gap-4 rounded-md border border-forestDeep/10 bg-white p-6 shadow-soft">
          <p><span className="font-semibold text-forestDeep">Clinic: </span>{site.fullName}</p>
          <p><span className="font-semibold text-forestDeep">Address: </span>{site.address}</p>
          <p><span className="font-semibold text-forestDeep">Phone: </span>{site.phone}</p>
          <p><span className="font-semibold text-forestDeep">Email: </span>{site.email}</p>
          <p><span className="font-semibold text-forestDeep">Hours: </span>{site.hours}</p>
          <div className="mt-3 min-h-48 rounded-md border border-dashed border-forestDeep/20 bg-sage/20 p-5 text-sm text-charcoal/60">
            Google Map placeholder. Replace with an embedded map after the clinic address is final.
          </div>
        </div>
      </div>
    </section>
  );
}
