"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IUser, useProfile } from "./store";
import { redirect } from "next/navigation";
import { error, success } from "@/lib/helpers/toastifyFunctions";
import EditProfileModal from "./EditProfileModal";

const Profile = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { updateRole, role, updateUser, user } = useProfile((state) => state);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/profile", {
          method: "GET",
          credentials: "include", // Включаем куки
        });

        // Если пользователь не авторизован, перенаправляем на страницу входа
        if (response.status === 401) {
          error("Вы не афторизовались");
          redirect("/login");
        }

        // Парсим данные
        const data = await response.json();

        // Проверяем, что данные существуют и не пусты
        if (data && data.length > 0) {
          updateRole(data[0].role);
          updateUser(data[0]);
        } else {
          console.error("Данные пользователя не найдены");
        }
      } catch (err) {
        console.error("Ошибка при загрузке профиля:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [updateRole, updateUser]);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleSave = async (updatedUser: IUser) => {
    try {
      // Отправляем обновленные данные на сервер
      const response = await fetch("http://localhost:3001/api/profile", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        success("Профиль успешно обновлен");
        updateUser(updatedUser); // Обновляем данные в хранилище
        setIsModalOpen(false); // Закрываем модальное окно
      } else {
        console.error("Ошибка при обновлении профиля");
      }
    } catch (err) {
      console.error("Ошибка при отправке данных:", err);
    }
  };

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="grid grid-cols-12 grid-rows-12 grid-flow-col w-full gap-2">
      {role === "admin" && (
        <Link
          href={"/add_product"}
          className="col-span-2 col-start-11 text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Добавить продукт
        </Link>
      )}
      <h1 className="">Профиль</h1>
      <p className="col-span-3">
        Добро пожаловать: {user.first_name} {user.last_name}{" "}
      </p>
      <p className="col-span-3">Ваша компания: {user.company}</p>
      <p className="col-span-3">Ваш номер: {user.phone_number}</p>
      <p className="col-span-2">Ваша роль: {role}</p>
      <button
        onClick={handleEditClick}
        className="col-span-2 col-start-11 text-center px-4 py-2 bg-blue-500 text-white rounded 
                  hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Редактировать профиль
      </button>

      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        user={user}
      />
    </div>
  );
};

export default Profile;
