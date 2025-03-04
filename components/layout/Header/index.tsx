"use client";

import Image from "next/image";
import Link from "next/link";
import delc from "@/public/image/logo.png";
import { useProfile } from "@/components/auth/store";
import ProfileHeader from "@/components/auth/ProfileHeader";

function Header() {
  const { role } = useProfile((state) => state);

  return (
    <div className="container flex justify-between items-center py-5">
      <Link href="/">
        <Image src={delc} alt="Логотип DELC"></Image>
      </Link>

      <div className="flex space-x-4">
        {role && <ProfileHeader />}
        {!role && (
          <Link
            href={"/login"}
            className="border p-2 rounded-lg text-black hover:bg-gray-100"
          >
            Вход
          </Link>
        )}
        {!role && (
          <Link
            href={"/registration"}
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
