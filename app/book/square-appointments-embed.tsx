"use client";

import { useEffect, useRef } from "react";

const squareAppointmentsScript =
  "https://square.site/appointments/buyer/widget/4j5cnvy44yi5kt/L9E4KW7SXV9DE.js";
const squareAppointmentsFrame =
  'iframe[src^="https://app.squareup.com/appointments/buyer/widget/4j5cnvy44yi5kt/L9E4KW7SXV9DE"]';

function removeSquareAppointmentsNodes() {
  document
    .querySelectorAll(`${squareAppointmentsFrame}, script[src="${squareAppointmentsScript}"]`)
    .forEach((node) => node.remove());
}

export function SquareAppointmentsEmbed() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const embed = embedRef.current;

    if (!embed) return;

    // Square inserts its iframe next to the script element. Mounting the script
    // inside this container keeps the booking calendar inside the booking card.
    removeSquareAppointmentsNodes();

    const script = document.createElement("script");
    script.src = squareAppointmentsScript;
    script.async = true;
    embed.appendChild(script);

    return removeSquareAppointmentsNodes;
  }, []);

  return (
    <div
      ref={embedRef}
      className="square-appointments-embed"
      aria-label="Online appointment booking"
    />
  );
}
