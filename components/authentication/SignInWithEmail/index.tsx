"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const SignInWithEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Ошибка при входе:", error.message);
    } else {
      console.log("Успешный вход:", data.user);
      window.location.href = "/profile"; // Перенаправление на страницу профиля
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Войти через почту</button>
    </div>
  );
};

export default SignInWithEmail;
