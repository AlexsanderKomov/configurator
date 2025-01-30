"use client";

import { IHandleSelectChange, ISelectCardProductProps } from "@/interfase";
import React, { useState, useEffect } from "react";
import Select from "react-select";

function SelectCardProduct({
  options,
  descr,
  setFormData,
  formData,
}: ISelectCardProductProps) {
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

  const handleSelectChange = (event: IHandleSelectChange) => {
    const { value } = event;

    setFormData({
      ...formData,
      [descr]: value,
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

export default SelectCardProduct;
