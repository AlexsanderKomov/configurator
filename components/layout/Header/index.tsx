"use client";

import Image from "next/image";
import Link from "next/link";
import delc from "@/public/image/logo.png";
import { useProfile } from "@/components/auth/store";
import ButtonLogout from "@/components/uikit/ButtonLogout";

function Header() {
  const { user } = useProfile((state) => state);

  return (
    <div className="container flex justify-between items-center">
      <Link href="/">
        <Image src={delc} alt="Логотип DELC"></Image>
      </Link>

      <div className="flex space-x-4">
        {user && <ButtonLogout />}
        {!user && (
          <Link
            href={"/login"}
            className="border p-2 rounded-lg text-black hover:bg-gray-100"
          >
            Вход
          </Link>
        )}
        {!user && (
          <Link
            href={"/register"}
            className="border p-2 rounded-lg text-black hover:bg-gray-100"
          >
            Регистрация
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
