import { IUser, useProfile } from "@/components/auth/store";
import { useEffect } from "react";

// Кастомный хук
function useFetchUserFromLocalStorage(
  key: string // Ключ для localStorage
) {
  const { updateRole, updateUser } = useProfile((state) => state);
  useEffect(() => {
    const savedData = localStorage.getItem(key); // Получаем данные из localStorage
    if (savedData) {
      const userData: IUser = JSON.parse(savedData); // Парсим данные
      updateUser(userData); // Обновляем данные пользователя
      updateRole(userData.role); // Обновляем роль
    }
  }, [key, updateUser, updateRole]); // Зависимости хука
}

export default useFetchUserFromLocalStorage;
