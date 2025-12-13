
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // IMPORTANT: Explicitly ignore API routes
  if (path.startsWith("/api")) {
    return NextResponse.next();
  }

  // Define secured paths
  const isProtected = path.startsWith("/admin");
  const isLoginPage = path === "/admin/login";

  if (isProtected && !isLoginPage) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // If no token, redirect to login
    if (!token) {
      const url = new URL("/admin/login", req.url);
      url.searchParams.set("callbackUrl", path);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
