import { FormEvent } from "react";
import ButtonStage from "@/components/uikit/ButtonStage";

/** Форма типа узла */
function NodeTypeForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Здесь вы можете обработать данные формы, например, отправить их на сервер
  };

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="mb-5">Здесь будет форма заполнения продукта</div>
        <button type="submit">Отправить</button>
        <ButtonStage step="Назад" stage={2} />
      </form>
    </>
  );
}

export default NodeTypeForm;
