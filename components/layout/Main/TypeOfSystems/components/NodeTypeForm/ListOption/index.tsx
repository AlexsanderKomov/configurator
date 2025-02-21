"use client";

import { getOptionName } from "@/lib/helpers/getOptionName";
import { ISelectCardProductProps } from "./interface";
import { useFormContext } from "react-hook-form";
import SelectForm from "@/components/uikit/SelectForm";

/** Селект */
function ListOption({ options }: ISelectCardProductProps) {
  const [nameOption, option, firstKeyArr] = getOptionName(options);

  const { register } = useFormContext();

  return (
    <ul className="mb-5">
      {firstKeyArr.map((name, index) => {
        const key = `name_option_${index}`;

        // Проверяем, есть ли изображение в option[index]
        const hasImage = firstKeyArr[index] === "image";

        return (
          <li key={key}>
            <label htmlFor={name}>{nameOption[index]}</label>
            {typeof option[index][0].value === "object" ? (
              hasImage ? (
                <input
                  id={name}
                  type="file"
                  {...register(`${name}.value`)}
                  accept="image/*"
                  required
                />
              ) : (
                <input
                  id={name}
                  type="text"
                  {...register(`${name}.value`)}
                  required
                />
              )
            ) : (
              <SelectForm
                name={name}
                defaultValue={option[index][0]}
                options={option[index]}
              />
            )}
            {/* Если есть изображение, добавляем input для загрузки изображения */}
          </li>
        );
      })}
    </ul>
  );
}

export default ListOption;
