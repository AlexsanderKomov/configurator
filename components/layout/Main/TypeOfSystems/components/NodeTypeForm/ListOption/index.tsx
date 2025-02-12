"use client";

import { getTheOptionName } from "@/lib/getTheOptionName";
import { ISelectCardProductProps } from "./interface";
import { useFormContext } from "react-hook-form";
import SelectForm from "@/components/uikit/SelectForm";

/** Селект */
function ListOption({ options }: ISelectCardProductProps) {
  const [nameOption, option, firstName] = getTheOptionName(options);

  const { register } = useFormContext();

  return (
    <ul className="mb-5">
      {firstName.map((name, index) => {
        const key = `name_option_${index}`;

        return (
          <li key={key}>
            <label htmlFor={name}>{nameOption[index]}</label>
            {typeof option[index][0].value === "object" ? (
              <input
                id={name}
                type="text"
                {...register(`${name}.value`)}
                required
              />
            ) : (
              <SelectForm
                name={name}
                defaultValue={option[index][0]}
                options={option[index]}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default ListOption;
