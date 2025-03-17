"use client";

import { Main } from "@/components";
import { useProfile } from "@/components/auth/store";
import useFetchUserFromLocalStorage from "@/lib/hooks/useFetchUserFromLocalStorage";

export default function Home() {
  const { updateUser, updateRole } = useProfile((store) => store);

  // Получаем данные пользователя из хранилища для определения авторизован ли пользователь
  useFetchUserFromLocalStorage("userData", updateUser, updateRole);

  return (
    <>
      <Main />
    </>
  );
}
