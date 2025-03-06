import { useProfile } from "@/components/auth/store";
import { useRouter } from "next/navigation";

import React from "react";
import Button from "../Button";

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
    <Button
      onClick={handleLogout}
      text="Выйти"
      className="bg-red-500 hover:bg-red-600 focus:bg-red-500"
    />    
  );
}

export default ButtonLogout;
