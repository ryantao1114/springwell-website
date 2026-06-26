import Link from "next/link";
import { BookingButton } from "@/components/BookingButton";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forestDeep/10 bg-ivory/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link className="flex items-center gap-3" href="/" aria-label={`${site.name} home`}>
          <span className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_65%_30%,#D1AE6A_0_18%,transparent_19%),linear-gradient(135deg,#173B33,#748566)] shadow-[inset_0_0_0_3px_rgba(250,247,242,0.8)]" />
          <span className="text-sm font-bold tracking-[0.12em] text-forestDeep md:text-base">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-charcoal/75 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link className="transition hover:text-forestDeep" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookingButton />
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex min-h-10 cursor-pointer list-none items-center rounded-md border border-forestDeep/15 px-3 text-sm font-semibold text-forestDeep">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 grid w-64 gap-1 rounded-md border border-forestDeep/10 bg-ivory p-3 shadow-soft">
            {navigation.map((item) => (
              <Link className="rounded-md px-3 py-2 text-sm text-charcoal hover:bg-sage/20" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <BookingButton className="mt-2 w-full" />
          </div>
        </details>
      </div>
    </header>
  );
}
