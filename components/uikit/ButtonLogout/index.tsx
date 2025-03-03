import { useProfile } from "@/components/auth/store";
import { useRouter } from "next/navigation";

import React from "react";

function ButtonLogout() {
  const { resetRole } = useProfile((state) => state);
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("http://localhost:3001/api/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      resetRole();
      router.push("/login");
    } else {
      console.log("Ошибка при выходе");
    }
  };

  return (
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
  );
}

export default ButtonLogout;
