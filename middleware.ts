// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token");

  // Если токен отсутствует, перенаправляем на страницу входа
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Защищаем только определенные роуты
export const config = {
  matcher: ["/profile", "/add_product"], // Добавьте сюда защищенные роуты
};
