"use client";

import React, { useEffect } from "react";
// import Select from "react-select";

import { ISelectCardProductProps } from "./interface";

/** Селект */
function SelectUI(props: ISelectCardProductProps) {
  const { options, descr } = props;
  useEffect(() => {
    console.log(options.manufacturer.manufacturer);
  }, []);

  return (
    <div className="mb-5">
      {/* {Object.values(options).map((option, index) => {
        const key = `type_${options}_${index}`;
        return (
          <div key={key} className="flex flex-col">
            {option.map((name) => {
              const key = `note_${name.value}_${index}`;
              console.log(option);
              return (
                <div key={key}>
                  <label>{option}</label>
                  <Select options={123} placeholder="Выберите значение" />
                </div>
              );
            })}
          </div>
        );
      })} */}
    </div>
  );
}

export default SelectUI;
