"use client";

import { redirect } from "next/navigation";

function Header() {
  const handleClick = () => {
    redirect("/add-product");
  };

  return (
    <div className="container">
      Header
      <button onClick={handleClick}>Добавить продукт</button>
    </div>
  );
}

export default Header;
