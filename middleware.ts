import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isAuthenticated = !!req.auth

  if (!isAuthenticated && pathname !== "/admin/login") {
    const loginUrl = new URL("/admin/login", req.url)
    loginUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (isAuthenticated && pathname === "/admin/login") {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/admin/:path*"],
}
