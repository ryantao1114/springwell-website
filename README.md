# Springwell Integrative Acupuncture

Multipage Next.js website for Springwell Integrative Acupuncture.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production commands:

```bash
npm run build
npm start
```

## Edit Content

Most copy and placeholders live in `content/`:

- `content/site.ts`: clinic name, booking link, provider bio, address, phone, email, hours, SEO keywords
- `content/navigation.ts`: header and footer navigation
- `content/services.ts`: service cards, durations, pricing placeholders
- `content/conditions.ts`: conditions page cards
- `content/faqs.ts`: new patient FAQ

## Replace Logo

The current logo mark is CSS-based inside `components/Header.tsx`. When the final logo is ready:

1. Put the optimized logo file in `public/images/`.
2. Replace the mark in `components/Header.tsx` with `next/image`.
3. Keep the file external rather than embedding base64.

## Update Square Booking Link

Set the environment variable:

```bash
NEXT_PUBLIC_BOOKING_URL=https://square.site/appointments/your-real-link
```

You can also edit the fallback in `content/site.ts`.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the GitHub repo in Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BOOKING_URL` in Vercel project settings.
4. Add the custom domain after DNS is ready.

The site does not store patient health information. Booking is handled through Square Appointments.
