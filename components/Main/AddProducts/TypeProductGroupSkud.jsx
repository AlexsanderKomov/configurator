import React from "react";
import TypeProduct from "./TypeProduct";

function TypeProductGroupSkud() {
  return (
    <div className="flex gap-x-5">
      <TypeProduct type="Монитор видеодомофона" />
      <TypeProduct type="Вызывная панель" />
      <TypeProduct type="Замок" />
      <TypeProduct type="Доводчик" />
      <TypeProduct type="Кнопка выхода" />
      <TypeProduct type="Блок питания" />
    </div>
  );
}

export default TypeProductGroupSkud;
