import Link from "next/link";
import { BookingButton } from "@/components/BookingButton";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-forestDeep/10 bg-forestDeep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.14em]">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">{site.description}</p>
          <BookingButton className="mt-6 bg-champagne text-forestDeep hover:bg-white" />
        </div>
        <div>
          <p className="text-sm font-semibold">Navigation</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            {navigation.map((item) => (
              <Link className="hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Contact</p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <span>{site.address}</span>
            <span>{site.phone}</span>
            <span>{site.email}</span>
            <span>{site.hours}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
