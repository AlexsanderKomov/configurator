"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Импортируем useRouter
import { error, success } from "@/lib/helpers/toastifyFunctions";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    phone_number: "",
    email: "",
    company: "",
    password: "",
    confirm_password: "",
  });

  const router = useRouter(); // Инициализируем useRouter

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка совпадения паролей
    if (formData.password !== formData.confirm_password) {
      error("Пароли не совпадают");
      return;
    }

    const response = await fetch("http://localhost:3001/api/registration", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      success("Регистрация успешна");
      router.push("/login"); // Перенаправляем на страницу /login
    } else {
      error("Пользователь с таким Email уже существует");
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
      {/* Имя */}
      <input
        type="text"
        name="first_name"
        placeholder="Имя"
        value={formData.first_name}
        onChange={handleChange}
        required
      />

      {/* Фамилия */}
      <input
        type="text"
        name="last_name"
        placeholder="Фамилия"
        value={formData.last_name}
        onChange={handleChange}
        required
      />

      {/* Отчество (опционально) */}
      <input
        type="text"
        name="middle_name"
        placeholder="Отчество (необязательно)"
        value={formData.middle_name}
        onChange={handleChange}
      />

      {/* Номер телефона */}
      <input
        type="tel"
        name="phone_number"
        placeholder="Номер телефона"
        value={formData.phone_number}
        onChange={handleChange}
        required
      />

      {/* Почта */}
      <input
        type="email"
        name="email"
        placeholder="Почта"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Компания */}
      <input
        type="text"
        name="company"
        placeholder="Компания"
        value={formData.company}
        onChange={handleChange}
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

      {/* Подтверждение пароля */}
      <input
        type="password"
        name="confirm_password"
        placeholder="Подтвердите пароль"
        value={formData.confirm_password}
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
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegistrationForm;
