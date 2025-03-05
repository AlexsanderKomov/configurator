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
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Выйти
    </button>
  );
}

export default ButtonLogout;
