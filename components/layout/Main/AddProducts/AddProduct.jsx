"use client";

import React from "react";
import TypeProductGroupSkud from "./TypeProductGroupSkud";
import TypeProductGroupAps from "./TypeProductGroupAps";
import TypeProductGroupVideo from "./TypeProductGroupVideo";

function AddProduct() {
  const [hide, setHide] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("skirt"); // Установлено значение по умолчанию для выбранного варианта
  const [hideType, setHideType] = React.useState(true); // Установлено значение по умолчанию для выпадающего списка
  const [hideTypeProduct, setHideTypeProduct] = React.useState(false); // Установлено значение по умолчанию для выпадающего списка
  const [hideCard, setHideCard] = React.useState(false); // Установлено значение по умолчанию для карточки продукта

  const handleClickHide = () => {
    setHide(!hide);
  };

  const handleClickType = () => {
    setHideType(!hideType);
    setHideTypeProduct(true);
  };

  const handleClickBack = () => {
    setHideType(true);
    setSelectedOption("skirt"); // Сброс выбранного значения при нажатии на кнопку "Назад"
    setHideCard(false);
    setHideTypeProduct(false);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Обновление выбранного значения при изменении выбора в выпадающем списке
  };

  // Компонент для добавления нового продукта
  return (
    <div className="mb-5 w-full h-auto p-5">
      {!hide && (
        <button
          onClick={handleClickHide}
          className="border rounded-lg px-3 py-2 mb-5"
        >
          Добавить продукт
        </button>
      )}
      {hide && (
        <div className="flex flex-col items-center gap-y-5">
          {hideType && (
            <>
              <select id="typeSystem" onChange={handleSelectChange}>
                {" "}
                <option value="skirt">СКУД</option>
                <option value="securityAlarm">
                  Охранно-пожарная сигнализация
                </option>
                <option value="videoSurveillance">Видеонаблюдение</option>
              </select>
              <button onClick={handleClickType}>Дальше</button>
            </>
          )}
          {hideTypeProduct && selectedOption === "skirt" && (
            <TypeProductGroupSkud />
          )}
          {hideTypeProduct && selectedOption === "securityAlarm" && (
            <TypeProductGroupAps />
          )}
          {hideTypeProduct && selectedOption === "videoSurveillance" && (
            <TypeProductGroupVideo />
          )}
          {!hideType && <button onClick={handleClickBack}>Назад</button>}
        </div>
      )}
    </div>
  );
}

export default AddProduct;
