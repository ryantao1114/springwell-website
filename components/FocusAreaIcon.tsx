import type { ReactNode } from "react";
import type { FocusAreaIconName } from "@/content/home";

type FocusAreaIconProps = {
  name: FocusAreaIconName;
};

const iconPaths: Record<FocusAreaIconName, ReactNode> = {
  spine: (
    <>
      <path d="M25 14c-5 6-7 13-5 21 1.4 5.8 1.1 10.4-1 15" />
      <path d="M35 14c5 6 7 13 5 21-1.4 5.8-1.1 10.4 1 15" />
      <path d="M29 19h6M27 25h10M27 31h10M28 37h8M29 43h6" />
      <path d="M21 28c-3 3-4 7-3 12M43 28c3 3 4 7 3 12" />
    </>
  ),
  lotus: (
    <>
      <path d="M32 46c-9-5-14-12-14-21 8 1 13 5 14 14 1-9 6-13 14-14 0 9-5 16-14 21Z" />
      <path d="M32 39c-6-6-7-14 0-22 7 8 6 16 0 22Z" />
      <path d="M18 31c-5 4-7 9-7 15 8 1 15-2 21-7M46 31c5 4 7 9 7 15-8 1-15-2-21-7" />
    </>
  ),
  mind: (
    <>
      <path d="M22 48v-8l-5-3 4-7c0-9 7-16 17-16 9 0 15 6 15 14 0 6-3 10-8 13v7" />
      <path d="M29 49h17" />
      <path d="M31 27c2-4 8-4 10 0 3-1 6 1 6 4s-2 5-5 5H31c-3 0-5-2-5-5s2-5 5-4Z" />
      <path d="M35 24v12M42 27c-1 3-1 6 1 9M31 28c2 2 2 5 0 8" />
    </>
  ),
  sleep: (
    <>
      <path d="M38 16c-7 2-12 8-12 16 0 9 7 16 16 16 4 0 8-1 11-4-3 8-10 13-19 13-12 0-21-9-21-21 0-9 5-17 13-20 4-2 8-2 12 0Z" />
      <path d="M45 14h8l-8 9h8M43 27h6l-6 7h6" />
    </>
  ),
  stomach: (
    <>
      <path d="M31 12c5 3 7 7 6 12-1 4 1 6 6 9 6 4 7 12 1 17-5 4-15 3-21-2-6-6-4-15 3-19 4-2 5-4 4-8-.7-3-.5-6 1-9Z" />
      <path d="M35 31c-7 1-11 5-12 11M37 25c4 1 8 4 9 9M30 19c3 3 5 6 5 10" />
    </>
  )
};

export function FocusAreaIcon({ name }: FocusAreaIconProps) {
  return (
    <span
      aria-hidden="true"
      className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#F2E8DC] text-moss ring-1 ring-forestDeep/8"
    >
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 64 64"
      >
        {iconPaths[name]}
      </svg>
    </span>
  );
}
