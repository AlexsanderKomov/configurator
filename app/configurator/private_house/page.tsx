"use client";
import { useProfile } from "@/components/auth/store";
import EquimpmentList from "@/components/configurator/EquimpmentList";
import Intercom from "@/components/configurator/private_house/Intercom";
import Kit from "@/components/configurator/private_house/Kit";
import Readers from "@/components/configurator/private_house/Readers";
import { useConfigStore } from "@/components/configurator/store";
import Button from "@/components/uikit/Button";
import { Stage } from "@/lib/enumStage";
import useFetchUserFromLocalStorage from "@/lib/hooks/useFetchUserFromLocalStorage";

function PrivateHousePage() {
  const { stage, stageForward, stageBack, selectedOption, resetValue } =
    useConfigStore((store) => store);
  const { updateUser, updateRole } = useProfile((store) => store);

  // Получаем данные пользователя из хранилища для определения авторизован ли пользователь
  useFetchUserFromLocalStorage("userData", updateUser, updateRole);

  const handleSubmit = () => {
    stageBack();
    if (stage === Stage.four) {
      resetValue();
    }
  };

  return (
    <div className="container flex flex-col items-center gap-5">
      {stage === Stage.one && (
        <Button text="Начать подбор" onClick={stageForward} />
      )}
      {stage === Stage.two && <Intercom />}
      {stage === Stage.three &&
        (selectedOption === "individually" ? (
          <EquimpmentList equimpment="monitor" />
        ) : (
          <Kit />
        ))}
      {stage === Stage.four && <EquimpmentList equimpment="calling_panel" />}
      {stage === Stage.five && <Readers />}
      {stage !== Stage.one && <Button text="Назад" onClick={handleSubmit} />}
    </div>
  );
}

export default PrivateHousePage;
