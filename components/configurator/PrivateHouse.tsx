"use client";
import Button from "../uikit/Button";
import Intercom from "./Intercom";
import Kit from "./Kit";
import { useConfigStore } from "./store";
import EquimpmentList from "./EquimpmentList";

function PrivateHouse() {
  const { stage, stageForward, stageBack, selectedOption } = useConfigStore(
    (store) => store
  );

  return (
    <div className="container">
      {stage === 1 && <Button text="Начать подбор" onClick={stageForward} />}
      {stage === 2 && <Intercom />}
      {stage === 3 &&
        (selectedOption === "individually" ? (
          <EquimpmentList equimpment="monitor" />
        ) : (
          <Kit />
        ))}

      {stage !== 1 && <Button text="Назад" onClick={stageBack} />}
    </div>
  );
}
export default PrivateHouse;
