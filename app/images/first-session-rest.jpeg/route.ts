export function GET(request: Request) {
  return Response.redirect(new URL("/images/first-session-rest.webp", request.url), 307);
}
