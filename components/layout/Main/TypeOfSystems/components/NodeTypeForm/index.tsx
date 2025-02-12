import ButtonStage from "@/components/uikit/ButtonStage";
import { useTypeStore } from "../../store";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { MONITOR } from "@/shared/constants/select_options/monitor";
import SelectUI from "./Select";
import { INodeProperties } from "./interface";
import { FormProvider, useForm } from "react-hook-form";
// import { INodeProperties } from "./interface";

/** Форма типа узла */
function NodeTypeForm() {
  const methods = useForm({ defaultValues: {} });
  let nodeProperties: INodeProperties = MONITOR;
  const typeNode = useTypeStore((store) => store.typeNode);

  if (typeNode === "callingPanel") {
    nodeProperties = CALLING_PANEL;
  }

  // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Здесь вы можете обработать данные формы, например, отправить их на сервер
  //   console.log(methods.handleSubmit((data) => console.log(data)));
  // };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col"
      >
        <SelectUI options={nodeProperties} />
        <button type="submit">Отправить</button>
        <ButtonStage step="Назад" stage={2} />
      </form>
    </FormProvider>
  );
}

export default NodeTypeForm;
