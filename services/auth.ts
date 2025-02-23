import { supabase } from "@/lib/supabaseClient";

export const signUpWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    throw new Error(error.message); // Явно выбрасываем ошибку с типом Error
  }
};

export const signUpWithPhone = async (phone: string) => {
  const { error } = await supabase.auth.signInWithOtp({
    phone: phone,
  });

  if (error) {
    throw new Error(error.message); // Явно выбрасываем ошибку с типом Error
  }
};
