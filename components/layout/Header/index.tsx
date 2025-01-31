"use client";

import { redirect } from "next/navigation";

function Header() {
  const handleClick = () => {
    redirect("/add_product");
  };

  return (
    <div className="container flex justify-between items-center">
      <div>Header</div>
      <button
        className="border p-2 rounded-lg text-white"
        onClick={handleClick}
      >
        Добавить продукт
      </button>
    </div>
  );
}

export default Header;
