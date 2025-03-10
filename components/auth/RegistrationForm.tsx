"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Импортируем useRouter
import { error, success } from "@/lib/helpers/toastifyFunctions";
import Button from "../uikit/Button";
import InputForm from "./comoinents/InputForm";

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

    const response = await fetch("/api/registration", {
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

  console.log(formData);

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
      <InputForm
        name="first_name"
        placeholder="Введите имя"
        value={formData.first_name}
        onChange={handleChange}
      />

      {/* Фамилия */}
      <InputForm
        name="last_name"
        placeholder="Введите фамилию"
        value={formData.last_name}
        onChange={handleChange}
      />

      {/* Отчество (опционально) */}
      <InputForm
        name="middle_name"
        placeholder="Введите отчество"
        value={formData.middle_name}
        onChange={handleChange}
      />

      {/* Номер телефона */}
      <InputForm
        type="tel"
        name="phone_number"
        placeholder="Введите номер телефона"
        value={formData.phone_number}
        onChange={handleChange}
      />

      {/* Почта */}
      <InputForm
        type="email"
        name="email"
        placeholder="Введите почту"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Компания */}
      <InputForm
        name="company"
        placeholder="Введите компанию"
        value={formData.company}
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

      {/* Подтверждение пароля */}
      <InputForm
        type="password"
        name="confirm_password"
        placeholder="Подтвердите пароль"
        value={formData.confirm_password}
        onChange={handleChange}
      />

      {/* Кнопка отправки */}
      <Button type="submit" text="Зарегистрироваться" />
    </form>
  );
};

export default RegistrationForm;
