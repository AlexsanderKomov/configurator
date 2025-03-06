"use client";
import Button from "../uikit/Button";
import Intercom from "./Intercom";
import Kit from "./Kit";
import Monitor from "./Monitor";
import { useConfigStore } from "./store";

function PrivateHouse() {
  const { stage, stageForward, stageBack, selectedOption } = useConfigStore(
    (store) => store
  );

  return (
    <div>
      {stage === 1 && <Button text="Начать подбор" onClick={stageForward} />}
      {stage === 2 && <Intercom />}
      {stage === 3 &&
        (selectedOption === "individually" ? <Monitor /> : <Kit />)}
      {stage !== 1 && <Button text="Назад" onClick={stageBack} />}
    </div>
  );
}
export default PrivateHouse;
