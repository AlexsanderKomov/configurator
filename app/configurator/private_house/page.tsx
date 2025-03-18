"use client";
import { useProfile } from "@/components/auth/store";
import EquimpmentList from "@/components/configurator/EquimpmentList";
import AdditionalEquipment from "@/components/configurator/private_house/AdditionalEquipment";
import Intercom from "@/components/configurator/private_house/Intercom";
import Kit from "@/components/configurator/private_house/Kit";
import Lock from "@/components/configurator/private_house/Lock";
import ReadySelection from "@/components/configurator/ReadySelection";
import { IData, useConfigStore } from "@/components/configurator/store";
import Button from "@/components/uikit/Button";
import { Stage } from "@/lib/enumStage";
import useFetchUserFromLocalStorage from "@/lib/hooks/useFetchUserFromLocalStorage";

function PrivateHousePage() {
  const {
    stage,
    stageForward,
    stageBack,
    selectedOption,
    resetValue,
    updateSelectedOption,
    getPreviousSelectedOption,
    updateLocalStorageData,
    updateSelectedValue,
    getPreviousSelectedValue,
  } = useConfigStore((store) => store);
  const { updateUser, updateRole } = useProfile((store) => store);

  // Получаем данные пользователя из хранилища для определения авторизован ли пользователь
  useFetchUserFromLocalStorage("userData", updateUser, updateRole);

  const previousSelectedOption = getPreviousSelectedOption();
  const previousSelectedValue = getPreviousSelectedValue();

  function deleteLastItem() {
    const storedData = localStorage.getItem("selectedItems");
    if (storedData) {
      const parsedData: IData[] = JSON.parse(storedData);

      // Удаляем последний элемент
      const updatedData = parsedData.slice(0, -1);

      // Сохраняем обновленный массив в localStorage
      localStorage.setItem("selectedItems", JSON.stringify(updatedData));

      // Обновляем состояние
      updateLocalStorageData(updatedData);
    }
  }

  const handleSubmit = () => {
    stageBack();
    switch (stage) {
      case Stage.four:
        deleteLastItem();
        updateSelectedValue(previousSelectedValue);
        resetValue();
        break;
      case Stage.five:
        deleteLastItem();
        updateSelectedOption("individually");
        break;
      case Stage.six:
        updateSelectedValue(previousSelectedValue);
        updateSelectedOption(previousSelectedOption);
        break;
      case Stage.seven:
        deleteLastItem();
        break;
      case Stage.eight:
        updateSelectedValue(previousSelectedValue);
        updateSelectedOption(previousSelectedOption);
        break;
    }
  };

  console.log(stage, selectedOption);
  console.log(previousSelectedValue);

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
        return selectedOption === "electromagnetic_lock" ||
          selectedOption === "electromechanical_lock" ? (
          <EquimpmentList equimpment="lock" />
        ) : (
          <AdditionalEquipment />
        );
      case Stage.seven:
        return selectedOption === "electromagnetic_lock" ||
          selectedOption === "electromechanical_lock" ? (
          <Button text="Блок питания" onClick={stageForward} />
        ) : selectedOption === "yes" ? (
          <p>дополнительное оборудование</p>
        ) : (
          <ReadySelection />
        );
      case Stage.eight:
        return <AdditionalEquipment />;
      case Stage.nine:
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
