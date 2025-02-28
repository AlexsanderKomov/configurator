import { IButtonStage } from "./interface";
import { useTypeStore } from "@/components/layout/Main/AddProduct/store";

function ButtonStage(props: IButtonStage) {
  const { step, stage, typeNode } = props;

  const updateStage = useTypeStore((store) => store.updateStage);
  const updateTypeNode = useTypeStore((store) => store.updateTypeNode);

  function handleClick() {
    updateStage(stage);
    if (stage === 3 && typeNode) {
      updateTypeNode(typeNode);
    }
  }

  return <button onClick={handleClick}>{step}</button>;
}

export default ButtonStage;
