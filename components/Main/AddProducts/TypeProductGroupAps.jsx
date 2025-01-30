import React from "react";
import TypeProduct from "./TypeProduct";

function TypeProductGroupAps() {
  return (
    <div className="flex gap-x-5">
      <TypeProduct type="Прибор" />
      <TypeProduct type="Оповещатель" />
      <TypeProduct type="Извещатель" />
      <TypeProduct type="Блок питания" />
    </div>
  );
}

export default TypeProductGroupAps;
