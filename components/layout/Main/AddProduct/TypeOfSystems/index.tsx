"use client";

import { ChangeEvent, useState } from "react";
import { CHOISE_OF_THE_SYSTEM } from "./constants";
import { useTypeStore } from "../store";
import NodeTypeForm from "./NodeTypeForm";
import ButtonStage from "@/components/uikit/ButtonStage";
import ListNodes from "./ListNodes";
import Button from "@/components/uikit/Button";
import { Stage } from "@/lib/enumStage";

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

  const renderStage = () => {
    switch (stage) {
      case Stage.one:
        return (
          <>
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
            <ButtonStage step="Дальше" stage={2} />
          </>
        );
      case Stage.two:
        return (
          <>
            <ListNodes type={typeSystem} />
            <ButtonStage step="Назад" stage={1} />
          </>
        );
      case Stage.three:
        return <NodeTypeForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center mb-5 h-auto p-5 flex-col">
      {viewSelect ? (
        <div className="flex flex-col items-center gap-y-5">
          {renderStage()}
        </div>
      ) : (
        <Button
          text="Добавить продукт"
          onClick={() => setViewSelect(!viewSelect)}
        />
      )}
    </div>
  );
}

export default TypeOfSystems;
