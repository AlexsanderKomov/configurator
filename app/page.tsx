"use client";

import { Main } from "@/components";
import { useProfile } from "@/components/auth/store";
import { useEffect } from "react";

export default function Home() {
  const { updateUser, updateRole } = useProfile((store) => store);
  // Извлекаем роль из localStorage при инициализации
  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      const userData = JSON.parse(savedUserData);
      updateUser(userData); // Обновляем данные в хранилище
      updateRole(userData.role);
    }
  }, [updateUser, updateRole]);

  useEffect(() => {
    if (!document.getElementById("modal-root")) {
      const modalRoot = document.createElement("div");
      modalRoot.setAttribute("id", "modal-root");
      document.body.appendChild(modalRoot);
    }
  }, []);

  return (
    <>
      <Main />
    </>
  );
}
