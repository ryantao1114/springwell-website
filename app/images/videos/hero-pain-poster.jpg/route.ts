export function GET(request: Request) {
  return Response.redirect(new URL("/images/videos/hero-pain-poster.webp", request.url), 307);
}
