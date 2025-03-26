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

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {step}
    </button>
  );
}

export default ButtonStage;
