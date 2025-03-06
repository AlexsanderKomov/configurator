import { FormProvider, useForm } from "react-hook-form";
import ButtonStage from "@/components/uikit/ButtonStage";
import { useTypeStore } from "../../store";
import { FormDataSubmit } from "./interface";
import ListOption from "./ListOption";
import { transformationOfProductThroughForm } from "@/lib/helpers/transformationOfProductThroughForm";
import { setNodeProperties } from "@/lib/helpers/setNodeProperties";
import Button from "@/components/uikit/Button";

/** Форма типа узла */
function NodeTypeForm() {
  const methods = useForm<FormDataSubmit>();
  const { handleSubmit, reset } = methods;
  const typeNode = useTypeStore((store) => store.typeNode);

  const nodeProperties = setNodeProperties(typeNode);

  const onSubmit = async (data: FormDataSubmit) => {
    let imageUrl: string = "";
    // Если есть изображение, отправляем его на сервер
    if (data.image?.value && data.image.value[0]) {
      const formData = new FormData();
      formData.append("file", data.image.value[0]);

      try {
        const response = await fetch("/api/upload", {
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
    const response = await fetch("/api/add_product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      console.log("Продукт добавлен");
    }

    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <ListOption options={nodeProperties} />
        <Button type="submit" text="Отправить" />
        <ButtonStage step="Назад" stage={2} />
      </form>
    </FormProvider>
  );
}

export default NodeTypeForm;
