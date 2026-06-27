import Link from "next/link";
import { site } from "@/content/site";

type BookingButtonProps = {
  label?: string;
  className?: string;
};

export function BookingButton({ label = "Book Online", className = "" }: BookingButtonProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-md bg-forestDeep px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(23,59,51,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${className}`}
      href={site.bookingUrl}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </Link>
  );
}
