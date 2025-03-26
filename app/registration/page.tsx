"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { error, success } from "@/lib/helpers/toastifyFunctions";
import InputForm from "@/components/auth/components/InputForm";
import Button from "@/components/uikit/Button";

interface IRegistrationForm {
  first_name: string;
  last_name: string;
  middle_name?: string;
  phone_number: string;
  email: string;
  company?: string;
  password: string;
  confirm_password: string;
}

const RegistrationPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<IRegistrationForm>();

  const onSubmit = async (data: IRegistrationForm) => {
    // Проверка совпадения паролей
    if (data.password !== data.confirm_password) {
      setError("confirm_password", {
        type: "manual",
        message: "Пароли не совпадают",
      });
      return;
    }

    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        success("Регистрация успешна");
        reset();
        router.push("/login");
      } else {
        const errorData = await response.json();
        error(errorData.message || "Ошибка регистрации");
        if (response.status === 409) {
          setError("email", {
            type: "manual",
            message: "Пользователь с таким Email уже существует",
          });
        }
      }
    } catch {
      error("Произошла ошибка при регистрации");
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 max-w-[400px] my-0 mx-auto"
      >
        {/* Имя */}
        <InputForm
          {...register("first_name", { required: "Имя обязательно" })}
          placeholder="Введите имя"
          error={errors.first_name?.message}
        />

        {/* Фамилия */}
        <InputForm
          {...register("last_name", { required: "Фамилия обязательна" })}
          placeholder="Введите фамилию"
          error={errors.last_name?.message}
        />

        {/* Отчество */}
        <InputForm
          {...register("middle_name")}
          placeholder="Введите отчество"
        />

        {/* Номер телефона */}
        <InputForm
          type="tel"
          {...register("phone_number", {
            required: "Номер телефона обязателен",
            pattern: {
              value: /^\+?[0-9]{11}$/,
              message: "Введите корректный номер телефона",
            },
          })}
          placeholder="Введите номер телефона"
          error={errors.phone_number?.message}
        />

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

        {/* Компания */}
        <InputForm {...register("company")} placeholder="Введите компанию" />

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

        {/* Подтверждение пароля */}
        <InputForm
          type="password"
          {...register("confirm_password", {
            required: "Подтверждение пароля обязательно",
            validate: (value) =>
              value === watch("password") || "Пароли не совпадают",
          })}
          placeholder="Подтвердите пароль"
          error={errors.confirm_password?.message}
        />

        {/* Кнопка отправки */}
        <Button
          type="submit"
          text="Зарегистрироваться"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default RegistrationPage;
