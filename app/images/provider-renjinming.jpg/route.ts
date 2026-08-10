export function GET(request: Request) {
  return Response.redirect(new URL("/images/provider-renjinming.webp", request.url), 307);
}
