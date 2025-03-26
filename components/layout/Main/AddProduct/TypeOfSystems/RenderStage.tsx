import { Stage } from "@/lib/enumStage";
import { useTypeStore } from "../store";
import { ChangeEvent } from "react";
import { CHOISE_OF_THE_SYSTEM } from "./constants";
import ButtonStage from "@/components/uikit/ButtonStage";
import ListNodes from "./ListNodes";
import NodeTypeForm from "./NodeTypeForm";

function RenderStage({
  onSelect,
}: {
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
  const { stage, typeSystem } = useTypeStore((state) => state);

  switch (stage) {
    case Stage.one:
      return (
        <>
          <select id="typeSystem" onChange={onSelect} defaultValue={typeSystem}>
            {CHOISE_OF_THE_SYSTEM.map((choise, index) => {
              const key = `choise_${choise.type}_${choise?.id || index + 1}`;

              return (
                <option key={key} value={choise.type}>
                  {choise.label}
                </option>
              );
            })}
          </select>
          <ButtonStage step="Дальше" stage={2} />
        </>
      );
    case Stage.two:
      return (
        <>
          <ListNodes type={typeSystem} />
          <ButtonStage step="Назад" stage={1} />
        </>
      );
    case Stage.three:
      return <NodeTypeForm />;
    default:
      return null;
  }
}

export default RenderStage;
