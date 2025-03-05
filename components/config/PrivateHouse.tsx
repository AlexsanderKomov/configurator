"use client";
import Intercom from "./Intercom";
import { useConfigStore } from "./store";

function PrivateHouse() {
  const { stage, stageForward, stageBack } = useConfigStore((store) => store);
  return (
    <div>
      {stage === 1 && <button onClick={stageForward}>Начать подбор</button>}
      {stage === 2 && <Intercom />}
      {stage !== 1 && <button onClick={stageBack}>Назад</button>}
    </div>
  );
}

export default PrivateHouse;
