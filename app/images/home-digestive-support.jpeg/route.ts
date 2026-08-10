export function GET(request: Request) {
  return Response.redirect(new URL("/images/home-digestive-support-upload.webp", request.url), 307);
}
