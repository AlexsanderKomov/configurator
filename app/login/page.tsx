"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { error, success } from "@/lib/helpers/toastifyFunctions";
import InputForm from "@/components/auth/components/InputForm";
import Button from "@/components/uikit/Button";

const LoginPage = () => {
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
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Сохраняем роль в localStorage
      localStorage.setItem("userData", JSON.stringify(data.user));

      if (!response.ok) {
        // Отображаем пользователю сообщение об ошибке
        error(data.message);
        return;
      }

      // Успешный вход
      success(data.message);
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
      <InputForm
        type="email"
        name="email"
        placeholder="Введите почту"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Пароль */}
      <InputForm
        type="password"
        name="password"
        placeholder="Введите пароль"
        value={formData.password}
        onChange={handleChange}
      />

      {/* Кнопка отправки */}
      <Button text="Войти" type="submit" />
    </form>
  );
};

export default LoginPage;
