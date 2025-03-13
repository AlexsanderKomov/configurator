"use client";
import Button from "../uikit/Button";
import Intercom from "./Intercom";
import Kit from "./Kit";
import { useConfigStore } from "./store";
import EquimpmentList from "./EquimpmentList";
import { Stage } from "@/lib/enumStage";

function PrivateHouse() {
  const { stage, stageForward, stageBack, selectedOption } = useConfigStore(
    (store) => store
  );

  return (
    <div className="container">
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
      {stage !== Stage.one && <Button text="Назад" onClick={stageBack} />}
    </div>
  );
}
export default PrivateHouse;
