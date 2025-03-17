"use client";
import { useProfile } from "@/components/auth/store";
import EquimpmentList from "@/components/configurator/EquimpmentList";
import Intercom from "@/components/configurator/private_house/Intercom";
import Kit from "@/components/configurator/private_house/Kit";
import Lock from "@/components/configurator/private_house/Lock";
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

  const renderStage = () => {
    switch (stage) {
      case Stage.one:
        return <Button text="Начать подбор" onClick={stageForward} />;
      case Stage.two:
        return <Intercom />;
      case Stage.three:
        return selectedOption === "individually" ? (
          <EquimpmentList equimpment="monitor" />
        ) : (
          <Kit />
        );
      case Stage.four:
        return <EquimpmentList equimpment="calling_panel" />;
      case Stage.five:
        return <Lock />;
      case Stage.six:
        return selectedOption === "electromagnetic_lock" ? (
          <EquimpmentList equimpment="lock" />
        ) : (
          <EquimpmentList equimpment="smart_lock" />
        );
      default:
        return null;
    }
  };

  return (
    <div className="container flex flex-col items-center gap-5">
      {renderStage()}
      {stage !== Stage.one && <Button text="Назад" onClick={handleSubmit} />}
    </div>
  );
}

export default PrivateHousePage;
