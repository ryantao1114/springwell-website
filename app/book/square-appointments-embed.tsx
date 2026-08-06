"use client";

import Script from "next/script";

const squareAppointmentsScript =
  "https://square.site/appointments/buyer/widget/4j5cnvy44yi5kt/L9E4KW7SXV9DE.js";

export function SquareAppointmentsEmbed() {
  return (
    <div className="square-appointments-embed" aria-label="Online appointment booking">
      <Script src={squareAppointmentsScript} strategy="afterInteractive" />
    </div>
  );
}
