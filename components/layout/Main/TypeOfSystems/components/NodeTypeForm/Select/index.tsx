"use client";

import { findTheOptionName } from "@/lib/findTheOptionName";
import { ISelectCardProductProps } from "./interface";
import Select from "react-select";
import { Controller, useFormContext } from "react-hook-form";

/** Селект */
function SelectUI({ options }: ISelectCardProductProps) {
  const [nameOption, option] = findTheOptionName(options);

  const { register } = useFormContext();

  return (
    <ul className="mb-5">
      {nameOption.map((name, index) => {
        const key = `name_option_${index}`;

        return (
          <li key={key}>
            <label htmlFor={name}>{name}</label>
            {typeof option[index][0].value === "object" ? (
              <input
                id={name}
                type="text"
                {...register(`${name}.value`)}
                required
              />
            ) : (
              <Controller
                name={name}
                defaultValue={option[index][0]}
                render={({ field }) => (
                  <Select {...field} options={option[index]} required />
                )}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default SelectUI;
