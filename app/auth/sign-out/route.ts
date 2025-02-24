import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  // Получаем объект cookies
  const cookieStore = await cookies();

  // Создаём серверный клиент Supabase
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            console.error("Ошибка при установке cookie:", error);
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            console.error("Ошибка при удалении cookie:", error);
          }
        },
      },
    }
  );

  // Выход из системы
  await supabase.auth.signOut();

  // Перенаправление на страницу входа
  return NextResponse.redirect(
    new URL(
      "/login",
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    )
  );
}
