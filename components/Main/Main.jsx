"use client";

import React from "react";
import { redirect } from "next/navigation";
import RadioBtn from "./RadioBtn";
import AddProduct from "./AddProducts/AddProduct";

function Main() {
  const handleClick = (e) => {
    e.preventDefault();

    const arr = document.querySelectorAll(".config");

    for (const label of arr) {
      if (label.children[1].checked) {
        redirect(`/config/${label.children[1].id}`);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="mb-5">Конфигуратор СКУД</h2>
      <AddProduct />
      <form className="flex flex-col items-center gap-4 mb-5">
        <div className="flex flex-row gap-4">
          <RadioBtn name="Частный дом" id="privateHouse" />
          <RadioBtn name="Многоквартирный дом" id="apartmentBuilding" />
          <RadioBtn name="Большой объект" id="largeObject" />
          <RadioBtn name="Другое (свободный выбор)" id="other" />
        </div>
        <button onClick={handleClick} className="border rounded-lg p-3 w-32">
          Выбрать
        </button>
      </form>
    </div>
  );
}

export default Main;
