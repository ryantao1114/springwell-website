import { ArrowIcon } from "../components/icons";
import { site } from "../config/site";

export function SafeContactOptions({ mode = "appointment" }: { mode?: "appointment" | "question" }) {
  const emailSubject = encodeURIComponent(
    mode === "question" ? "General question for SpringWell Acupuncture" : "Help with online booking",
  );

  return (
    <div className="safe-contact-options">
      <div className="safe-contact-actions">
        {mode === "appointment" && (
          <a className="button button-primary" href={site.bookingUrl} target="_blank" rel="noreferrer">
            Open secure online booking <ArrowIcon />
          </a>
        )}
        <a className="button button-secondary" href={site.phoneHref}>
          Call {site.phone}
        </a>
        <a className="text-link" href={`mailto:${site.email}?subject=${emailSubject}`}>
          Email a general, non-medical question <ArrowIcon />
        </a>
      </div>
      <p className="form-disclaimer">
        Email is not a secure channel for medical information. For emergencies, call 911 or seek immediate medical care.
      </p>
    </div>
  );
}
