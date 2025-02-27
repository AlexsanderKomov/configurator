"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Импортируем useRouter

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/login"); // Перенаправляем на страницу /login
    } else {
      console.log("Ошибка при выходе");
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
        name="firstName"
        placeholder="Имя"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      {/* Фамилия */}
      <input
        type="text"
        name="lastName"
        placeholder="Фамилия"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      {/* Отчество (опционально) */}
      <input
        type="text"
        name="middleName"
        placeholder="Отчество (необязательно)"
        value={formData.middleName}
        onChange={handleChange}
      />

      {/* Номер телефона */}
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Номер телефона"
        value={formData.phoneNumber}
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
        name="confirmPassword"
        placeholder="Подтвердите пароль"
        value={formData.confirmPassword}
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

export default RegisterForm;
