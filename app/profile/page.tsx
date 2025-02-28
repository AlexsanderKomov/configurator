"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/profile", {
          credentials: "include", // Включаем куки
        });

        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }

        const data = await response.json();
        setUserRole(data[0].role);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    const response = await fetch("http://localhost:3001/api/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      router.push("/login");
    } else {
      console.log("Ошибка при выходе");
    }
  };

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      {userRole === "admin" && (
        <Link href={"/add_product"}>Добавить продукт</Link>
      )}
      <h1>Профиль</h1>
      <p>Ваша роль: {userRole}</p>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px",
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Выйти
      </button>
    </div>
  );
};

export default ProfilePage;
