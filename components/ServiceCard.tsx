import { BookingButton } from "@/components/BookingButton";

type ServiceCardProps = {
  service: {
    name: string;
    description: string;
    supports: string;
    duration: string;
    price: string;
  };
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-md border border-forestDeep/10 bg-white p-6 shadow-[0_16px_40px_rgba(23,59,51,0.06)]">
      <h3 className="text-xl font-semibold text-forestDeep">{service.name}</h3>
      <p className="mt-3 text-sm leading-7 text-charcoal/70">{service.description}</p>
      <div className="mt-5 grid gap-3 border-t border-forestDeep/10 pt-5 text-sm">
        <p>
          <span className="font-semibold text-forestDeep">May support: </span>
          <span className="text-charcoal/70">{service.supports}</span>
        </p>
        <p className="text-charcoal/70">{service.duration}</p>
        <p className="text-charcoal/70">{service.price}</p>
      </div>
      <BookingButton className="mt-6 w-full" />
    </article>
  );
}
