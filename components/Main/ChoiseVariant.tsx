import React, { MouseEvent } from "react";
import { redirect } from "next/navigation";

import RadioBtn from "./RadioBtn";

function ChoiseVariant() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const arr = document.querySelectorAll(".config");

    for (const label of arr) {
      if ((label.children[1] as HTMLInputElement).checked) {
        redirect(`/config/${(label.children[1] as HTMLInputElement).id}`);
      }
    }
  };

  return (
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
  );
}

export default ChoiseVariant;
