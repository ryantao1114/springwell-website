export function GET(request: Request) {
  return Response.redirect(new URL("/images/videos/hero-womens-health-uploaded-poster-v4.webp", request.url), 307);
}
