import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookieName = "ab_test_group";

  if (!request.cookies.get(cookieName)) {
    const isEven = Math.random() >= 0.5;

    response.cookies.set(cookieName, isEven ? "even" : "odd", {
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return response;
}
