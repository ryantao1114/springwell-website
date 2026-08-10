export function GET(request: Request) {
  return Response.redirect(new URL("/images/videos/hero-stress-digestion-poster.webp", request.url), 307);
}
