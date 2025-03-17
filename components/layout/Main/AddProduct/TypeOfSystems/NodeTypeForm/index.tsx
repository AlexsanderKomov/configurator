import { FormProvider, useForm } from "react-hook-form";
import ButtonStage from "@/components/uikit/ButtonStage";
import { useTypeStore } from "../../store";
import { FormDataSubmit } from "./interface";
import ListOption from "./ListOption";
import { transformationOfProductThroughForm } from "@/lib/helpers/transformationOfProductThroughForm";
import { setNodeProperties } from "@/lib/helpers/setNodeProperties";
import Button from "@/components/uikit/Button";
import { error, success } from "@/lib/helpers/toastifyFunctions";

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
        }
      } catch (err) {
        error(`Ошибка: ${err}`);
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
      body: JSON.stringify([productData]),
    });

    const result = await response.json(); // Парсим ответ сервера

    if (response.ok) {
      success("Товар успешно добавлен");
    } else {
      const imagesToDelete = [productData].map((product) =>
        product.image.replace("http://localhost:3001/uploads/", "")
      );
      // Если произошла ошибка, удаляем изображения
      const deleteResponse = await fetch(
        "http://localhost:3001/api/delete_images",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ images: imagesToDelete }),
        }
      );

      if (!deleteResponse.ok) {
        error("Ошибка при удалении изображений");
      }

      // Если сервер вернул артикул дубликата, выводим его
      error(result.message);
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
