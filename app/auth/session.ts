import { createServerClient } from "@supabase/ssr";
import { headers } from "next/headers";
import { Database } from "@/lib/database.types";

export const getSession = async () => {
  const headerList = headers();
  const cookie = headerList.get("cookie"); // Получаем строку cookies

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          // Вручную извлекаем значение cookie из строки
          const match = cookie?.match(new RegExp(`(^| )${name}=([^;]+)`));
          return match ? match[2] : null;
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
};
