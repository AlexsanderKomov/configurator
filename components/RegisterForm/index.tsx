"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabaseClient";

const schema = z
  .object({
    firstName: z.string().min(1, "Имя обязательно"),
    lastName: z.string().min(1, "Фамилия обязательна"),
    middleName: z.string().optional(),
    phoneNumber: z.string().min(1, "Номер телефона обязателен"),
    email: z.string().email("Неверный формат email"),
    company: z.string().min(1, "Компания обязательна"),
    role: z.enum(["admin", "user"]),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (authError) throw authError;

      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: authData.user?.id,
          first_name: data.firstName,
          last_name: data.lastName,
          middle_name: data.middleName,
          phone_number: data.phoneNumber,
          email: data.email,
          company: data.company,
        },
      ]);

      if (profileError) throw profileError;

      alert("Регистрация успешна!");
      console.log(123);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Произошла неизвестная ошибка");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя</label>
        <input {...register("firstName")} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      <div>
        <label>Фамилия</label>
        <input {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>
      <div>
        <label>Отчество</label>
        <input {...register("middleName")} />
        {errors.middleName && <span>{errors.middleName.message}</span>}
      </div>
      <div>
        <label>Номер телефона</label>
        <input {...register("phoneNumber")} />
        {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Компания</label>
        <input {...register("company")} />
        {errors.company && <span>{errors.company.message}</span>}
      </div>
      <div>
        <label>Пароль</label>
        <input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label>Подтвердите пароль</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Загрузка..." : "Зарегистрироваться"}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
}
