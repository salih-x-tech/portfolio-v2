import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const isValid = await verifyAdminToken(token);

  if (!isValid) {
    const response = NextResponse.redirect(
      new URL("/admin/login", request.url)
    );

    response.cookies.delete("admin_token");

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/projects/:path*"],
};