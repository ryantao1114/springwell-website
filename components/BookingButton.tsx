import Link from "next/link";
import { site } from "@/content/site";

type BookingButtonProps = {
  label?: string;
  className?: string;
};

export function BookingButton({ label = "Book Online", className = "" }: BookingButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-md bg-forestDeep px-5 text-sm font-semibold text-white transition hover:bg-forest ${className}`}
      href={site.bookingUrl}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </Link>
  );
}
