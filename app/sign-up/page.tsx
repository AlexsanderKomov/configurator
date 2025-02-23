"use client";

import { useState } from "react";
import { signUpWithEmail, signUpWithPhone } from "@/services/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    phone?: string;
  }>({});

  // Валидация email
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Валидация пароля (минимум 6 символов)
  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  // Валидация телефона (простой пример для российских номеров)
  const validatePhone = (phone: string) => {
    const regex = /^\+7\d{10}$/; // Формат: +7XXXXXXXXXX
    return regex.test(phone);
  };

  // Обработчик регистрации через email
  const handleSignUpWithEmail = async () => {
    const errors: { email?: string; password?: string } = {};

    if (!validateEmail(email)) {
      errors.email = "Пожалуйста, введите корректный email.";
    }

    if (!validatePassword(password)) {
      errors.password = "Пароль должен содержать минимум 6 символов.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      await signUpWithEmail(email, password);
      alert("Проверьте вашу почту для подтверждения регистрации!");
      setErrors({});
    } catch (error) {
      if (error instanceof Error) {
        alert("Ошибка при регистрации: " + error.message);
      } else {
        alert("Произошла неизвестная ошибка.");
      }
    }
  };

  // Обработчик регистрации через телефон
  const handleSignUpWithPhone = async () => {
    const errors: { phone?: string } = {};

    if (!validatePhone(phone)) {
      errors.phone =
        "Пожалуйста, введите корректный номер телефона (формат: +7XXXXXXXXXX).";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      await signUpWithPhone(phone);
      alert("Код подтверждения отправлен на ваш телефон!");
      setErrors({});
    } catch (error) {
      if (error instanceof Error) {
        alert("Ошибка при отправке кода: " + error.message);
      } else {
        alert("Произошла неизвестная ошибка.");
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-8">
      <h1>Регистрация</h1>

      {/* Форма регистрации через email */}
      <h2>Регистрация через Email</h2>
      <input
        type="email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <input
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <button onClick={handleSignUpWithEmail}>
        Зарегистрироваться через Email
      </button>

      {/* Форма регистрации через телефон */}
      <h2>Регистрация через Телефон</h2>
      <input
        type="tel"
        placeholder="Введите ваш телефон (формат: +7XXXXXXXXXX)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
      <button onClick={handleSignUpWithPhone}>
        Зарегистрироваться через Телефон
      </button>
    </div>
  );
}
