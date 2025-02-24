"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Вход пользователя через Supabase Auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error("Ошибка при входе:", error); // Логируем ошибку
        alert(error.message); // Показываем пользователю
        return;
      }

      // Если вход успешен, перенаправляем на защищённую страницу
      if (data.user) {
        alert("Вход выполнен успешно!");
        router.push("/profile"); // Перенаправление на страницу профиля
      }
    } catch (error) {
      console.error("Неожиданная ошибка:", error); // Логируем ошибку
      alert("Произошла ошибка при входе. Пожалуйста, попробуйте снова."); // Общее сообщение для пользователя
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h1>Вход</h1>

      {/* Почта */}
      <input
        type="email"
        name="email"
        placeholder="Почта"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Пароль */}
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        value={formData.password}
        onChange={handleChange}
        required
      />

      {/* Кнопка отправки */}
      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
