import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
let UserID = 1;
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookieName = "ab_test_group";
  const userID = "userID";

  if (!request.cookies.get(cookieName)) {
    response.cookies.set(cookieName, UserID % 2 === 0 ? "odd" : "even", {
      maxAge: 60 * 60 * 24 * 365,
    });
    response.cookies.set(userID, `${UserID}`, {
      maxAge: 60 * 60 * 24 * 365,
    });
    UserID++;
  }
  return response;
}
