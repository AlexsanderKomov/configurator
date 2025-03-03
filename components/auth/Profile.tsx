"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProfile } from "./store";

const Profile = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { updateUser, user } = useProfile((state) => state);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/profile", {
          method: "GET",
          credentials: "include", // Включаем куки
        });

        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }

        const data = await response.json();
        updateUser(data);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [updateUser]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      {user[0].role === "admin" && (
        <Link href={"/add_product"}>Добавить продукт</Link>
      )}
      <h1>Профиль</h1>
      <p>Ваша роль: {user[0].role}</p>
    </div>
  );
};

export default Profile;
