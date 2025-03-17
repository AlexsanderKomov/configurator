import { IUser } from "@/components/auth/store";
import { useEffect } from "react";

// Кастомный хук
function useFetchUserFromLocalStorage(
  key: string, // Ключ для localStorage
  updateUser: (newuser: IUser) => void, // Функция для обновления данных пользователя
  updateRole: (role: string) => void // Функция для обновления роли
) {
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
