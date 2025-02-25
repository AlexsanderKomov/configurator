"use client";
import { getUserRole } from "@/lib/helpers/getUserRole";
import { createClient } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [role, setRole] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getUserRole(supabase); // Используем функцию
      if (role) {
        setRole(role);
      }
    };

    fetchRole();
  }, [supabase]);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Профиль</h1>
      <p>Ваша роль: {role}</p>
      <form action="/auth/sign-out" method="POST">
        <button
          type="submit"
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
      </form>
    </div>
  );
};

export default ProfilePage;
