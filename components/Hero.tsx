import Image from "next/image";
import { BookingButton } from "@/components/BookingButton";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  image = "/images/hero-springwell.png",
  secondaryHref,
  secondaryLabel
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-forestDeep text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forestDeep via-forestDeep/70 to-forestDeep/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forestDeep/70 to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[76vh] max-w-6xl content-end px-5 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-champagne">
            {eyebrow}
          </p>
          <h1 className="break-words text-4xl font-black uppercase leading-none tracking-normal sm:text-5xl md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookingButton className="min-h-12 px-7 text-base bg-champagne text-forestDeep ring-1 ring-white/25 hover:bg-white" />
            {secondaryHref && secondaryLabel ? (
              <a
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                href={secondaryHref}
              >
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
