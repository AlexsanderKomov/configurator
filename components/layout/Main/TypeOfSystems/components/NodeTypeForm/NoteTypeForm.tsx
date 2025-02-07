import { FormEvent } from "react";
import ButtonStage from "@/components/uikit/ButtonStage";
import { useTypeStore } from "../../store";
import { CALLINGPANEL, MONITOR } from "@/shared/constants";

/** Форма типа узла */
function NodeTypeForm() {
  const typeNode = useTypeStore((store) => store.typeNode);
  let nodeProperties = null; // Здесь будут храниться свойства узла

  if (typeNode === "monitor") {
    nodeProperties = MONITOR;
  } else if (typeNode === "callingPanel") {
    nodeProperties = CALLINGPANEL;
  }
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Здесь вы можете обработать данные формы, например, отправить их на сервер
  };

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="mb-5">{`Здесь будет форма заполнения продукта ${nodeProperties} ${typeNode}`}</div>
        <button type="submit">Отправить</button>
        <ButtonStage step="Назад" stage={2} />
      </form>
    </>
  );
}

export default NodeTypeForm;
