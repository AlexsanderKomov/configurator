"use client";

import { ChangeEvent, useState } from "react";
import { useTypeStore } from "../store";
import Button from "@/components/uikit/Button";
import RenderStage from "./RenderStage";

/* Типы систем видеонаблюдения */
function TypeOfSystems() {
  // Состояние отображения селекта
  const [viewSelect, setViewSelect] = useState(false);
  // Этап по которому мы проходим до нужного нам блока
  const { updateTypeSystem } = useTypeStore((state) => state);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    updateTypeSystem(event.target.value); // Обновление выбранного значения при изменении выбора в выпадающем списке
  };

  return (
    <div className="flex justify-center mb-5 h-auto p-5 flex-col">
      {viewSelect ? (
        <div className="flex flex-col items-center gap-y-5">
          {<RenderStage onSelect={handleSelectChange} />}
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
