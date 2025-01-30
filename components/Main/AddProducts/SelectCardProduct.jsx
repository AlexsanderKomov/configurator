"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";

function SelectCardProduct({ options, descr, setFormData, formData }) {
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
  });

  const handleInputChange = (event) => {
    let { name, value } = event;

    name = descr; // Update name based on descr

    setFormData({
      ...formData,
      [name]: value,
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
        defaultValue={descr === "wifi" ? options[0] : ""}
        onChange={handleInputChange}
        options={options}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default SelectCardProduct;
