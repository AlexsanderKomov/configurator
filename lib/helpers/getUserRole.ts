import { SupabaseClient } from "@supabase/supabase-js";

export const getUserRole = async (supabase: SupabaseClient) => {
  // Получаем текущего пользователя
  const { data: user, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("Ошибка при получении пользователя:", userError);
    return null;
  }

  // Запрашиваем роль пользователя из таблицы `profiles`
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.user.id)
    .single();

  if (profileError) {
    console.error("Ошибка при получении роли:", profileError);
    return null;
  }

  return profile.role; // Возвращаем роль пользователя
};
