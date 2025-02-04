"use client";

import React from "react";
import TypeProductGroup from "./TypeProductGroup/TypeProductGroup";
import { CHOISE_OF_THE_SYSTEM } from "./constants";

function AddProduct() {
  const [hide, setHide] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("skirt"); // Установлено значение по умолчанию для выбранного варианта
  const [hideType, setHideType] = React.useState(true); // Установлено значение по умолчанию для выпадающего списка

  const handleClickHide = () => {
    setHide(!hide);
  };

  const handleClickType = () => {
    setHideType(!hideType);
  };

  const handleClickBack = () => {
    setHideType(true);
    setSelectedOption("skirt"); // Сброс выбранного значения при нажатии на кнопку "Назад"
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
          Добавить продукт выбор
        </button>
      )}
      {hide && (
        <div className="flex flex-col items-center gap-y-5">
          {hideType && (
            <>
              <select id="typeSystem" onChange={handleSelectChange}>
                {CHOISE_OF_THE_SYSTEM.map((choise, index) => {
                  const key = `choise_${choise.type}_${
                    choise?.id || index + 1
                  }`;
                  return (
                    <option key={key} value={choise.type}>
                      {choise.label}
                    </option>
                  );
                })}
              </select>
              <button onClick={handleClickType}>Дальше</button>
            </>
          )}
          {!hideType && <TypeProductGroup type={selectedOption} />}
          {!hideType && <button onClick={handleClickBack}>Назад</button>}
        </div>
      )}
    </div>
  );
}

export default AddProduct;
