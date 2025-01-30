import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import {
  optionsDevice,
  optionsManufacturer,
  optionsWifi,
  optionsDisplay,
} from "../../../rules";
import SelectCardProduct from "./SelectCardProduct";

function CardProductForm() {
  const [formData, setFormData] = useState({
    device: "",
    title: "",
    manufacturer: "",
    image: "",
    display: "",
    description: "",
    wifi: false,
  });

  useEffect(() => {
    console.log(optionsDevice);
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Здесь вы можете обработать данные формы, например, отправить их на сервер
    console.log(formData);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <SelectCardProduct
        descr={formData.device}
        setFormData={setFormData}
        formData={formData}
        options={optionsDevice}
      />
      <div className="mb-5">
        <label htmlFor={formData.device}>Название:</label>
        <input
          type="text"
          id={formData.device}
          name={formData.device}
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <SelectCardProduct
        descr={formData.device}
        setFormData={setFormData}
        formData={formData}
        options={optionsManufacturer}
      />
      <div className="mb-5">
        <label htmlFor={formData.device}>Изображение:</label>
        <input
          type="file"
          id={formData.device}
          name={formData.device}
          value={formData.image}
          onChange={handleInputChange}
        />
      </div>
      {formData.device !== "callingPanel" && (
        <SelectCardProduct
          descr={formData.device}
          setFormData={setFormData}
          formData={formData}
          options={optionsDisplay}
        />
      )}
      <div className="mb-5">
        <label htmlFor={formData.device}>Описание:</label>
        <textarea
          id={formData.device}
          name={formData.device}
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <SelectCardProduct
        descr={formData.device}
        setFormData={setFormData}
        formData={formData}
        options={optionsWifi}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default CardProductForm;
