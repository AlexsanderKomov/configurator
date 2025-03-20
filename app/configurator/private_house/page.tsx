"use client";
import { useProfile } from "@/components/auth/store";
import EquimpmentList from "@/components/configurator/EquimpmentList";
import AdditionalEquipment from "@/components/configurator/private_house/AdditionalEquipment";
import Intercom from "@/components/configurator/private_house/Intercom";
import Kit from "@/components/configurator/private_house/Kit";
import Lock from "@/components/configurator/private_house/Lock";
import ReadySelection from "@/components/configurator/ReadySelection";
import { useConfigStore } from "@/components/configurator/store";
import Button from "@/components/uikit/Button";
import { Stage } from "@/lib/enumStage";
import { deleteLastItemFromLocalStorage } from "@/lib/helpers/dataLocalStorage";
import useFetchUserFromLocalStorage from "@/lib/hooks/useFetchUserFromLocalStorage";

function PrivateHousePage() {
  const { stage, stageBack, selectedOption } = useConfigStore((store) => store);
  const { updateUser, updateRole } = useProfile((store) => store);

  // Получаем данные пользователя из хранилища для определения авторизован ли пользователь
  useFetchUserFromLocalStorage("userData", updateUser, updateRole);

  const handleSubmit = () => {
    // Удаляем последний элемент из localStorage
    deleteLastItemFromLocalStorage(stage);

    stageBack();
  };

  const renderStage = () => {
    switch (stage) {
      case Stage.one:
        return <Intercom />;
      case Stage.two:
        return selectedOption === "individually" ? (
          <EquimpmentList equimpment="monitor" />
        ) : (
          <Kit />
        );
      case Stage.three:
        return <EquimpmentList equimpment="calling_panel" />;
      case Stage.four:
        return <Lock />;
      case Stage.five:
        return selectedOption === "electromagnetic_lock" ||
          selectedOption === "electromechanical_lock" ? (
          <EquimpmentList equimpment="lock" />
        ) : (
          <AdditionalEquipment />
        );
      case Stage.six:
        return selectedOption === "electromagnetic_lock" ||
          selectedOption === "electromechanical_lock" ? (
          <EquimpmentList equimpment="power" />
        ) : selectedOption === "yes" ? (
          <p>дополнительное оборудование</p>
        ) : (
          <ReadySelection />
        );
      case Stage.seven:
        return <AdditionalEquipment />;
      case Stage.eight:
        return selectedOption === "yes" ? (
          <p>дополнительное оборудование</p>
        ) : (
          <ReadySelection />
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
