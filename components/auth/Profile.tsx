"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProfile } from "./store";

const Profile = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { updateRole, role } = useProfile((state) => state);

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
        updateRole(data[0].role);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [updateRole]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      {role === "admin" && <Link href={"/add_product"}>Добавить продукт</Link>}
      <h1>Профиль</h1>
      <p>Ваша роль: {role}</p>
    </div>
  );
};

export default Profile;
