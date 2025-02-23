import { FormProvider, useForm } from "react-hook-form";
import { supabase } from "@/lib/supabaseClient";
import ButtonStage from "@/components/uikit/ButtonStage";
import { useTypeStore } from "../../store";
import { CALLING_PANEL } from "@/shared/constants/select_options/calling_panel";
import { MONITOR } from "@/shared/constants/select_options/monitor";
import { FormDataSubmit, INodeProperties } from "./interface";
import ListOption from "./ListOption";
import { transformationOfProductThroughForm } from "@/lib/helpers/transformationOfProductThroughForm";

/** Форма типа узла */
function NodeTypeForm() {
  const methods = useForm<FormDataSubmit>();
  const { handleSubmit, reset } = methods;
  let nodeProperties: INodeProperties = MONITOR;
  const typeNode = useTypeStore((store) => store.typeNode);

  if (typeNode === "callingPanel") {
    nodeProperties = CALLING_PANEL;
  }

  const onSubmit = async (data: FormDataSubmit) => {
    let imageUrl: string = "";
    // Если есть изображение, отправляем его на сервер
    if (data.image?.value && data.image.value[0]) {
      const formData = new FormData();
      formData.append("file", data.image.value[0]);

      try {
        const response = await fetch("http://localhost:5000/api/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          imageUrl = result.url;
          console.log("Изображение загружено:", result.url);
        } else {
          console.error("Ошибка при загрузке изображения");
        }
      } catch (error) {
        console.error("Ошибка:", error);
        return;
      }
    }

    // Преобразование данных для Supabase
    const productData = transformationOfProductThroughForm(
      data,
      nodeProperties,
      imageUrl,
      typeNode
    );

    console.log(productData);
    const { data: insertedData, error } = await supabase
      .from("products")
      .insert([productData])
      .single();

    if (error) {
      console.error("Ошибка при сохранении продукта:", error);
    } else {
      console.log("Продукт сохранен:", insertedData);
    }

    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <ListOption options={nodeProperties} />
        <button type="submit">Отправить</button>
        <ButtonStage step="Назад" stage={2} />
      </form>
    </FormProvider>
  );
}

export default NodeTypeForm;
