"use client";

import React, { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";

import { ISelectCardProductProps } from "./interface";
import { IDevice, IScreenSize, IWifi } from "@/shared/interfaces/selectOption";

/** Селект */
function SelectUI(props: ISelectCardProductProps) {
  const { options, descr, setFormData, formData } = props;

  const [description, setDescription] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  // Set placeholder and description based on descr
  useEffect(() => {
    switch (descr) {
      case "device":
        setDescription("Тип оборудования:");
        setPlaceholder("Выберите оборудование");
        break;
      case "manufacturer":
        setDescription("Производитель:");
        setPlaceholder("Выберите производителя");
        break;
      case "display":
        setDescription("Размер дисплея:");
        setPlaceholder("Выберите размер экрана");
        break;
      case "wifi":
        setDescription("Наличик Wi-fi:");
        break;
    }
  }, [descr]);

  const handleSelectChange = (
    newValue: SingleValue<boolean | IDevice | IScreenSize | IWifi>
  ) => {
    setFormData({
      ...formData,
      [descr]: (newValue as IScreenSize)?.value,
    });
  };

  return (
    <div className="mb-5">
      <label htmlFor={descr} className="mr-3">
        {description}
      </label>
      <Select
        inputId={descr}
        className="w-64"
        defaultValue={descr === "wifi" ? options[0] : false}
        placeholder={placeholder}
        options={options}
        required
        onChange={handleSelectChange}
      />
    </div>
  );
}

export default SelectUI;
