import { supabase } from "@/lib/supabaseClient";

export const registrWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message); // Явно выбрасываем ошибку с типом Error
  }
};
