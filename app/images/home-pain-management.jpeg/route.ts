export function GET(request: Request) {
  return Response.redirect(new URL("/images/home-pain-management-upload.webp", request.url), 307);
}
