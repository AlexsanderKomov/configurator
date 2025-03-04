"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { error } from "@/lib/helpers/error";

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
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Отображаем пользователю сообщение об ошибке
        error(data.error || "Ошибка при входе");
        return;
      }

      // Успешный вход
      console.log("Успешный вход:", data.message);
      router.push("/profile");
    } catch (err) {
      // Логируем ошибку для разработчиков
      console.error("Ошибка при входе:", err);

      // Отображаем пользователю общее сообщение
      error("Ошибка сервера");
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
