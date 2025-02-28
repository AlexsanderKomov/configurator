import Image from "next/image";
import Link from "next/link";
import delc from "@/public/image/logo.png";

function Header() {
  return (
    <div className="container flex justify-between items-center">
      <Link href="/">
        <Image src={delc} alt="Логотип DELC"></Image>
      </Link>

      <div className="flex space-x-4">
        <Link
          href={"/login"}
          className="border p-2 rounded-lg text-black hover:bg-gray-100"
        >
          Вход
        </Link>
        <Link
          href={"/register"}
          className="border p-2 rounded-lg text-black hover:bg-gray-100"
        >
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Header;
