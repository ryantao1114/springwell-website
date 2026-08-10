export function GET(request: Request) {
  return Response.redirect(new URL("/images/home-stress-sleep-upload.webp", request.url), 307);
}
