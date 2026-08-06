"use client";

import { FormEvent, useState } from "react";
import { site } from "../config/site";

export function AppointmentForm({ mode = "appointment" }: { mode?: "appointment" | "question" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("_subject", mode === "question" ? "New question from Springwell website" : "New appointment request from Springwell website");
    data.set("_captcha", "false");
    data.set("_template", "table");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Unable to send form");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <h2>Thank you for reaching out.</h2>
        <p>
          Your message has been sent to {site.email}. We will reply as soon as possible.
        </p>
        <button className="button button-secondary" onClick={() => setStatus("idle")} type="button">
          Return to form
        </button>
      </div>
    );
  }

  return (
    <form className="appointment-form" onSubmit={submit} action={`https://formsubmit.co/ajax/${site.email}`} method="POST">
      <input type="hidden" name="_subject" value={mode === "question" ? "New question from Springwell website" : "New appointment request from Springwell website"} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <div className="field-row">
        <label>First name<input name="firstName" autoComplete="given-name" required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
      </div>
      <div className="field-row">
        <label>Email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Phone<input type="tel" name="phone" autoComplete="tel" required /></label>
      </div>
      <label>
        {mode === "question" ? "What is your question about?" : "What would you like support with?"}
        <select name="service" defaultValue="" required>
          <option disabled value="">Select a service</option>
          <option>Women’s health or menstrual support</option>
          <option>Fertility and IVF support</option>
          <option>Pain management</option>
          <option>Orofacial / TMJ pain</option>
          <option>Stress or sleep support</option>
          <option>Digestive support</option>
          <option>General acupuncture</option>
          <option>Fire cupping</option>
          <option>Chinese herbal medicine consultation</option>
          <option>I’m not sure yet</option>
        </select>
      </label>
      <label>
        {mode === "question" ? "Preferred way to hear back" : "Preferred appointment time"}
        <select name="timing" defaultValue="" required>
          <option disabled value="">Select a preference</option>
          {mode === "question" ? <><option>Email</option><option>Phone</option></> : <><option>Weekday morning</option><option>Weekday afternoon</option><option>Weekday evening</option><option>Sunday</option></>}
        </select>
      </label>
      <label>
        Anything you’d like us to know? <small>Please do not include sensitive medical details.</small>
        <textarea name="message" rows={4} placeholder="A brief note about what brings you in" />
      </label>
      <label className="consent-field">
        <input type="checkbox" required />
        <span>I understand this is an appointment request and not confirmation or emergency care.</span>
      </label>
      {status === "error" && <p className="form-error" role="alert">We could not send the form right now. Please email {site.email} directly.</p>}
      <button className="button button-primary form-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : mode === "question" ? "Send your question" : "Send appointment request"}</button>
      <p className="form-disclaimer">For medical emergencies, call 911 or seek immediate medical care.</p>
    </form>
  );
}
