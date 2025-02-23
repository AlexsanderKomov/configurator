"use client";

import { supabase } from "@/lib/supabaseClient";

const SignOut = () => {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Ошибка при выходе:", error.message);
    } else {
      console.log("Успешный выход");
      window.location.href = "/"; // Перенаправление на главную страницу
    }
  };

  return (
    <div>
      <button onClick={handleSignOut}>Выйти</button>
    </div>
  );
};

export default SignOut;
