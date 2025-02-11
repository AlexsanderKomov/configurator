"use client";

// import Select from "react-select";
import { findTheOptionName } from "@/lib/findTheOptionName";
import { ISelectCardProductProps } from "./interface";
import Select from "react-select";

/** Селект */
function SelectUI({ options }: ISelectCardProductProps) {
  const [nameOption, option] = findTheOptionName(options);

  console.log(nameOption);

  return (
    <ul className="mb-5">
      {nameOption.map((name, index) => {
        const key = `name_option_${index}`;
        console.log(option[index][0].value);
        return (
          <li key={key}>
            <label htmlFor={name}>{name}</label>
            {option[index][0].value === null ? (
              <input id={name} type="text" />
            ) : (
              <Select
                defaultValue={option[index][0]}
                options={option[index]}
                required
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default SelectUI;
