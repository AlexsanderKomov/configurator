"use client";
import { createClient } from "@/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState<boolean>(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Ошибка при проверке сессии:", error);
      } else if (user) {
        setUser(true);
      } else {
        console.log("Пользователь не аутентифицирован");
      }
    };

    fetchSession();
  }, [supabase]);

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

  if (!user) {
    return <p>Загрузка...</p>;
  }

  return (
    <div>
      <Link href={"/add_product"}>Добавить продукт</Link>
      <h1>Профиль</h1>
      <p>Ваша роль: </p>
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
