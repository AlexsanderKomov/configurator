import React from "react";
import TypeProduct from "./TypeProduct";

function TypeProductGroupVideo() {
  return (
    <div className="flex gap-x-5">
      <TypeProduct type="Регистратор" />
      <TypeProduct type="Камера" />
      <TypeProduct type="Коммутатор" />
      <TypeProduct type="Инжектор" />
      <TypeProduct type="Блок питания" />
    </div>
  );
}

export default TypeProductGroupVideo;
