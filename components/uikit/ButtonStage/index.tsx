import React from "react";
import { IButtonStage } from "./interface";
import { useTypeStore } from "@/components/layout/Main/TypeOfSystems/store";

function ButtonStage(props: IButtonStage) {
  const updateStage = useTypeStore((store) => store.updateStage);
  const { step, stage } = props;
  function handleClick() {
    updateStage(stage);
  }

  return <button onClick={handleClick}>{step}</button>;
}

export default ButtonStage;
