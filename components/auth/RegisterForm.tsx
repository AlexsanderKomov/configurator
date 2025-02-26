"use client";
import { useState } from "react";

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

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Регистрация прошла успешно");
      } else {
        console.log("Ошибка при регистрации", response.status);
      }
    } catch (error) {
      console.log("Ошибка:", error);
      return;
    }

    // try {
    //   // Регистрация пользователя в Supabase Auth
    //   const { data, error } = await supabase.auth.signUp({
    //     email: formData.email,
    //     password: formData.password,
    //   });

    //   if (error) {
    //     alert("Пользователь с таким Email уже существует"); // Показываем пользователю
    //     return;
    //   }

    //   // Если регистрация прошла успешно, сохраняем профиль в таблице `profiles`
    //   if (data.user) {
    //     const { error: profileError } = await supabase.from("profiles").insert([
    //       {
    //         id: data.user.id,
    //         first_name: formData.firstName,
    //         last_name: formData.lastName,
    //         middle_name: formData.middleName,
    //         phone_number: formData.phoneNumber,
    //         email: formData.email,
    //         company: formData.company,
    //         role: "user", // Роль по умолчанию
    //       },
    //     ]);

    //     if (profileError) {
    //       console.error("Ошибка при сохранении профиля:", profileError); // Логируем ошибку
    //       alert(profileError.message); // Показываем пользователю
    //       return;
    //     }

    //     alert("Регистрация успешна!");
    //     router.push("/profile"); // Перенаправляем на страницу /profile
    //   }
    // } catch (error) {
    //   console.error("Неожиданная ошибка:", error); // Логируем ошибку
    //   alert("Произошла ошибка при регистрации. Пожалуйста, попробуйте снова."); // Общее сообщение для пользователя
    // }
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
