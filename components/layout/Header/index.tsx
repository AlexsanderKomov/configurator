"use client";

import Image from "next/image";
import Link from "next/link";
import delc from "@/public/image/Logo-01.svg";
import { useProfile } from "@/components/auth/store";
import ProfileHeader from "@/components/auth/ProfileHeader";

function Header() {
  const { role } = useProfile((state) => state);

  return (
    <div className="container flex justify-between items-center py-5">
      <Link href="/">
        <Image width={150} src={delc} alt="Логотип DELC"></Image>
      </Link>

      <div className="flex space-x-4">
        {role && <ProfileHeader />}
        {!role && (
          <Link
            href={"/login"}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Вход
          </Link>
        )}
        {!role && (
          <Link
            href={"/registration"}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Регистрация
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
