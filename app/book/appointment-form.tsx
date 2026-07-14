"use client";

import { FormEvent, useState } from "react";

export function AppointmentForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <h2>Your request is ready.</h2>
        <p>
          Your request has been noted in this preview. For the fastest confirmed
          appointment, please use Book Online. Do not include sensitive medical
          information in this form.
        </p>
        <button className="button button-secondary" onClick={() => setSent(false)} type="button">
          Return to form
        </button>
      </div>
    );
  }

  return (
    <form className="appointment-form" onSubmit={submit}>
      <div className="field-row">
        <label>First name<input name="firstName" autoComplete="given-name" required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
      </div>
      <div className="field-row">
        <label>Email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Phone<input type="tel" name="phone" autoComplete="tel" required /></label>
      </div>
      <label>
        What would you like support with?
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
        Preferred appointment time
        <select name="timing" defaultValue="" required>
          <option disabled value="">Select a preference</option>
          <option>Weekday morning</option>
          <option>Weekday afternoon</option>
          <option>Weekday evening</option>
          <option>Saturday</option>
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
      <button className="button button-primary form-button" type="submit">Send appointment request <span>↗</span></button>
      <p className="form-disclaimer">For medical emergencies, call 911 or seek immediate medical care.</p>
    </form>
  );
}
