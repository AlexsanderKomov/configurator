"use client";

import Image from "next/image";
import Link from "next/link";
import delc from "@/public/image/logo.png";

function Header() {
  return (
    <div className="container flex justify-between items-center">
      <Link href="#">
        <Image src={delc} alt="Логотип DELC"></Image>
      </Link>
      <Link href={"/add_product"} className="border p-2 rounded-lg text-black">
        Добавить продукт
      </Link>
      <Link href={"/login"} className="border p-2 rounded-lg text-black">
        Вход
      </Link>
      <Link href={"/register"} className="border p-2 rounded-lg text-black">
        Регистрация
      </Link>
    </div>
  );
}

export default Header;
