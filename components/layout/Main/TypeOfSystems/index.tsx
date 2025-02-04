"use client";

import { ChangeEvent, useState } from "react";

import TypeOfNodes from "./components/ListNodes";

import { CHOISE_OF_THE_SYSTEM } from "./constants";
import { Stage } from "./enums";

/* Типы систем видеонаблюдения */
function TypeOfSystems() {
  // Состояние отображения селекта
  const [viewSelect, setViewSelect] = useState(false);
  // Установлено значение по умолчанию для выбранного варианта
  const [selectedOption, setSelectedOption] = useState("skirt");
  // Этап по которому мы проходим до нужного нам блока
  const [stage, setStage] = useState<Stage>(1);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value); // Обновление выбранного значения при изменении выбора в выпадающем списке
  };

  return (
    <div className="flex justify-center mb-5 w-full h-auto p-5">
      {viewSelect ? (
        <div className="flex flex-col items-center gap-y-5">
          {stage === Stage.one && (
            <select id="typeSystem" onChange={handleSelectChange}>
              {CHOISE_OF_THE_SYSTEM.map((choise, index) => {
                const key = `choise_${choise.type}_${choise?.id || index + 1}`;

                return (
                  <option key={key} value={choise.type}>
                    {choise.label}
                  </option>
                );
              })}
            </select>
          )}
          {stage === Stage.two && <TypeOfNodes type={selectedOption} />}
          {stage === Stage.one && (
            <button onClick={() => setStage(2)}>Дальше</button>
          )}
          {stage === Stage.two && (
            <button
              onClick={() => {
                setStage((prevStage) => --prevStage);
                setSelectedOption("skirt");
              }}
            >
              Назад
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() => setViewSelect(!viewSelect)}
          className="border rounded-lg px-3 py-2 mb-5"
        >
          Добавить продукт
        </button>
      )}
    </div>
  );
}

export default TypeOfSystems;
