"use client";

import AddProduct from "./AddProducts/AddProduct";

function Main() {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-5">Конфигуратор СКУД</h2>
      <AddProduct />
    </div>
  );
}

export default Main;
