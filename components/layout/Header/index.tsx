"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import delc from "@/public/image/logo.png";

function Header() {
  const handleClick = () => {
    redirect("/add_product");
  };

  return (
    <div className="container flex justify-between items-center">
      <Link href="#">
        <Image src={delc} alt="Логотип DELC"></Image>
      </Link>
      <button
        className="border p-2 rounded-lg text-black"
        onClick={handleClick}
      >
        Добавить продукт
      </button>
    </div>
  );
}

export default Header;
