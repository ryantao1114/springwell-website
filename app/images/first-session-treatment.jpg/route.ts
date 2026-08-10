export function GET(request: Request) {
  return Response.redirect(new URL("/images/first-session-treatment.webp", request.url), 307);
}
