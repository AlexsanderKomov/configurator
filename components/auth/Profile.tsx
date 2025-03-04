"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProfile } from "./store";
import { redirect } from "next/navigation";
import { error } from "@/lib/helpers/error";

const Profile = () => {
  const [loading, setLoading] = useState<boolean>(true);
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

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="grid grid-cols-12 grid-rows-12 grid-flow-col w-full">
      {role === "admin" && (
        <Link href={"/add_product"} className="col-span-2 col-start-11">
          Добавить продукт
        </Link>
      )}
      <h1 className="">Профиль</h1>
      <p className="col-span-3">
        Добро пожаловать: {user.first_name} {user.last_name}{" "}
      </p>
      <p className="col-span-3">Ваш компания: {user.company}</p>
      <p className="col-span-3">Ваш номер: {user.phone_number}</p>
      <p className="col-span-2">Ваша роль: {role}</p>
    </div>
  );
};

export default Profile;
