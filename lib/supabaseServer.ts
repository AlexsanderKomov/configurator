import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export const supabaseServer = async () => {
  // Получаем объект cookies
  const cookieStore = await cookies();

  // Создаём серверный клиент Supabase
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // URL вашего Supabase проекта
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // Anon Key вашего Supabase проекта
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
};
