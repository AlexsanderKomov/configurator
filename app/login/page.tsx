"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { error, success } from "@/lib/helpers/toastifyFunctions";
import InputForm from "@/components/auth/components/InputForm";
import Button from "@/components/uikit/Button";

interface ILoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ILoginForm>();

  const onSubmit = async (data: ILoginForm) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        error(responseData.message);
        setError("root", { message: responseData.message });
        return;
      }

      // Сохраняем данные пользователя
      localStorage.setItem("userData", JSON.stringify(responseData.user));
      success(responseData.message);
      router.push("/profile");
    } catch {
      error("Ошибка сервера");
      setError("root", { message: "Ошибка сервера" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        {...register("email", {
          required: "Email обязателен",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Введите корректный email",
          },
        })}
        placeholder="Введите почту"
        error={errors.email?.message}
      />

      {/* Пароль */}
      <InputForm
        type="password"
        {...register("password", {
          required: "Пароль обязателен",
          minLength: {
            value: 6,
            message: "Пароль должен содержать минимум 6 символов",
          },
        })}
        placeholder="Введите пароль"
        error={errors.password?.message}
      />

      {/* Общая ошибка */}
      {errors.root && (
        <p className="text-red-500 text-sm">{errors.root.message}</p>
      )}

      {/* Кнопка отправки */}
      <Button text="Войти" type="submit" disabled={isSubmitting} />
    </form>
  );
};

export default LoginPage;
