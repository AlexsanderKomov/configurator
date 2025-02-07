import React from "react";
import { IButtonStage } from "./interface";
import { useTypeStore } from "@/components/layout/Main/TypeOfSystems/store";

function ButtonStage(props: IButtonStage) {
  const updateStage = useTypeStore((store) => store.updateStage);
  const updateTypeNode = useTypeStore((store) => store.updateTypeNode);

  const { step, stage, typeNode } = props;
  function handleClick() {
    updateStage(stage);
    if (stage === 3 && typeNode) {
      updateTypeNode(typeNode);
    }
  }

  return <button onClick={handleClick}>{step}</button>;
}

export default ButtonStage;
