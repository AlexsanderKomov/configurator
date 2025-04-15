import { IUser, useProfile } from "@/components/auth/store";
import { useEffect } from "react";

function isValidUser(data: unknown): data is IUser {
  return (
    !!data &&
    typeof data === "object" &&
    "role" in data &&
    typeof data.role === "string"
  );
}

function useFetchUserFromLocalStorage(key: string) {
  // Используем стабильные селекторы
  const updateUser = useProfile((state) => state.updateUser);
  const updateRole = useProfile((state) => state.updateRole);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedData = localStorage.getItem(key);
    if (!savedData) return;

    try {
      const parsedData = JSON.parse(savedData);
      if (!isValidUser(parsedData)) {
        console.error("Неверная структура пользовательских данных");
        return;
      }

      // Получаем текущее состояние без подписки
      const currentUser = useProfile.getState().user;

      // Обновляем только при изменении данных
      if (JSON.stringify(currentUser) !== JSON.stringify(parsedData)) {
        updateUser(parsedData);
        updateRole(parsedData.role);
      }
    } catch (error) {
      console.error("Не удалось загрузить пользователя:", error);
    }
  }, [key, updateUser, updateRole]); // Зависимости
}

export default useFetchUserFromLocalStorage;
