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
      className="px-4 py-2 text-white rounded text-base font-medium
        bg-gradient-to-r from-[#30ebff] to-[#2563eb] hover:opacity-60 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:#2563eb focus:ring-offset-2"
    >
      {step}
    </button>
  );
}

export default ButtonStage;
