"use client";

import { Main } from "@/components";
import { useProfile } from "@/components/auth/store";
import { useConfigStore } from "@/components/configurator/store";
import useFetchUserFromLocalStorage from "@/lib/hooks/useFetchUserFromLocalStorage";
import { useEffect } from "react";

export default function Home() {
  const { updateUser, updateRole } = useProfile((store) => store);
  const { resetLocalStorageData, resetValue } = useConfigStore(
    (store) => store
  );

  useEffect(() => {
    localStorage.removeItem("selectedItems");
    resetLocalStorageData();
    resetValue();
  }, [resetLocalStorageData, resetValue]);
  // Получаем данные пользователя из хранилища для определения авторизован ли пользователь
  useFetchUserFromLocalStorage("userData", updateUser, updateRole);

  return (
    <>
      <Main />
    </>
  );
}
