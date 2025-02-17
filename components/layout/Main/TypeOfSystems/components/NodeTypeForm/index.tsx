import { FormProvider, useForm } from "react-hook-form";
import ButtonStage from "@/components/uikit/ButtonStage";
import { useTypeStore } from "../../store";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { MONITOR } from "@/shared/constants/select_options/monitor";
import { INodeProperties } from "./interface";
import ListOption from "./ListOption";

/** Форма типа узла */
function NodeTypeForm() {
  const methods = useForm();
  let nodeProperties: INodeProperties = MONITOR;
  const typeNode = useTypeStore((store) => store.typeNode);

  if (typeNode === "callingPanel") {
    nodeProperties = CALLING_PANEL;
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col"
      >
        <ListOption options={nodeProperties} />
        <button type="submit">Отправить</button>
        <ButtonStage step="Назад" stage={2} />
      </form>
    </FormProvider>
  );
}

export default NodeTypeForm;
