import { createServerClient } from "@supabase/ssr";
import { headers } from "next/headers";
import { Database } from "@/lib/database.types";

export const getSession = async () => {
  try {
    const headerList = await headers();
    const cookie = headerList.get("cookie");

    if (!cookie) {
      throw new Error("No cookies found in headers");
    }

    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            const match = cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
            return match ? match[2] : null;
          },
        },
      }
    );

    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    return session;
  } catch (error) {
    console.error("Error getting session:", error);
    return null;
  }
};
