"use client";

import RenderStage from "@/components/configurator/private_house/RenderStage";
import { useConfigStore } from "@/components/configurator/store";
import Button from "@/components/uikit/Button";
import { Stage } from "@/lib/enumStage";
import { deleteLastItemFromLocalStorage } from "@/lib/helpers/dataLocalStorage";
import useFetchUserFromLocalStorage from "@/lib/hooks/useFetchUserFromLocalStorage";

function PrivateHousePage() {
  const { stage, stageBack } = useConfigStore((store) => store);

  // Получаем данные пользователя из хранилища для определения авторизован ли пользователь
  useFetchUserFromLocalStorage("userData");

  const handleSubmit = () => {
    // Удаляем последний элемент из localStorage
    deleteLastItemFromLocalStorage(stage);

    stageBack();
  };

  return (
    <div className="container flex flex-col items-center gap-5">
      {<RenderStage />}
      {stage !== Stage.one && <Button text="Назад" onClick={handleSubmit} />}
    </div>
  );
}

export default PrivateHousePage;
