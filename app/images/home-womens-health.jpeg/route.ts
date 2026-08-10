export function GET(request: Request) {
  return Response.redirect(new URL("/images/home-womens-health-upload.webp", request.url), 307);
}
