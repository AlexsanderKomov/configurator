"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { error, success } from "@/lib/helpers/toastifyFunctions";
import { IUser, useProfile } from "@/components/auth/store";
import Button from "@/components/uikit/Button";
import EditProfileModal from "@/components/auth/EditProfileModal";
import { createPortal } from "react-dom";
import ChangeProductsModal from "@/components/uikit/ChangeProductsModal";

function ProfilePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpenProfile, setIsModalOpenProfile] = useState<boolean>(false);
  const [isModalOpenChange, setIsModalOpenChange] = useState<boolean>(false);
  const { updateRole, role, updateUser, user } = useProfile((state) => state);

  const router = useRouter();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile", {
          method: "GET",
          credentials: "include", // Включаем куки
        });
        const data = await response.json(); // Парсим данные

        // Если пользователь не авторизован, перенаправляем на страницу входа
        if (response.status === 401) {
          // Если пользователь не авторизован, очищаем localStorage
          localStorage.removeItem("userData");
          error("Вы не афторизовались");
          router.push("/login");
        } else if (data && data.length > 0) {
          updateRole(data[0].role);
          updateUser(data[0]);
          localStorage.setItem("userData", JSON.stringify(data[0])); // Сохраняем в localStorage
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
  }, [updateRole, updateUser, router]);

  const handleSave = async (updatedUser: IUser) => {
    try {
      // Отправляем обновленные данные на сервер
      const response = await fetch("/api/profile", {
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
        localStorage.setItem("userData", JSON.stringify(updatedUser)); // Обновляем в localStorage
        setIsModalOpenProfile(false); // Закрываем модальное окно
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
    <div className="container grid grid-cols-12 grid-rows-12 grid-flow-col w-full gap-2">
      <h1 className="">Профиль</h1>
      <p className="col-span-3">
        Добро пожаловать: {user.first_name} {user.last_name}{" "}
      </p>
      <p className="col-span-3">Ваша компания: {user.company}</p>
      <p className="col-span-3">Ваш номер: {user.phone_number}</p>
      <p className="col-span-2">Ваша роль: {role}</p>
      {role === "admin" && (
        <div className="col-span-2 col-start-11 row-span-2 flex flex-col gap-2">
          <Link
            href={"/add_product"}
            className="text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Добавить продукт
          </Link>
          <Button
            text="Изменить продукт"
            onClick={() => {
              setIsModalOpenChange(true);
            }}
          />
        </div>
      )}
      <Button
        text="Редактировать профиль"
        onClick={() => setIsModalOpenProfile(true)}
        className="col-span-2 col-start-11"
      />

      {isModalOpenChange &&
        createPortal(
          <ChangeProductsModal
            isOpen={isModalOpenChange}
            onClose={() => setIsModalOpenChange(false)}
          />,
          document.getElementById("modal-root") as HTMLElement
        )}

      {isModalOpenProfile &&
        createPortal(
          <EditProfileModal
            isOpen={isModalOpenProfile}
            onClose={() => setIsModalOpenProfile(false)}
            onSave={handleSave}
            user={user}
          />,
          document.getElementById("modal-root") as HTMLElement
        )}
    </div>
  );
}

export default ProfilePage;
