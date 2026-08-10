export function GET(request: Request) {
  return Response.redirect(new URL("/images/first-session-assessment.webp", request.url), 307);
}
