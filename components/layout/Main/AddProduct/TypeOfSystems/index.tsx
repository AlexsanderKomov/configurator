"use client";

import { ChangeEvent, useState } from "react";
import { CHOISE_OF_THE_SYSTEM } from "./constants";
import { Stage } from "./enums";
import { useTypeStore } from "../store";
import NodeTypeForm from "./NodeTypeForm";
import ButtonStage from "@/components/uikit/ButtonStage";
import ListNodes from "./ListNodes";

/* Типы систем видеонаблюдения */
function TypeOfSystems() {
  // Состояние отображения селекта
  const [viewSelect, setViewSelect] = useState(false);
  // Этап по которому мы проходим до нужного нам блока
  const { stage, typeSystem, updateTypeSystem } = useTypeStore(
    (state) => state
  );

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    updateTypeSystem(event.target.value); // Обновление выбранного значения при изменении выбора в выпадающем списке
  };

  return (
    <div className="flex justify-center mb-5 h-auto p-5 flex-col">
      {viewSelect ? (
        <div className="flex flex-col items-center gap-y-5">
          {stage === Stage.one && (
            <select
              id="typeSystem"
              onChange={handleSelectChange}
              defaultValue={typeSystem}
            >
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
          {stage === Stage.two && <ListNodes type={typeSystem} />}
          {stage === Stage.one && <ButtonStage step="Дальше" stage={2} />}
          {stage === Stage.two && <ButtonStage step="Назад" stage={1} />}
        </div>
      ) : (
        <button
          onClick={() => setViewSelect(!viewSelect)}
          className="border rounded-lg px-3 py-2 mb-5"
        >
          Добавить продукт
        </button>
      )}
      {stage === Stage.three && <NodeTypeForm />}
    </div>
  );
}

export default TypeOfSystems;
