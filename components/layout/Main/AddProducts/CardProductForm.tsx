import { ChangeEvent, FormEvent, useState } from "react";

import SelectCardProduct from "./SelectCardProduct";

import { SCREEN_SIZES } from "@/app/shared/constants/select_options/screen_sizes";
import { WIFI } from "@/app/shared/constants/select_options/wifi";
import { DEVICES } from "@/app/shared/constants/select_options/devices";
import { MANUFACTURERS } from "@/app/shared/constants/select_options/manufacturer";

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

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Здесь вы можете обработать данные формы, например, отправить их на сервер
    console.log(formData);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event?.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <SelectCardProduct
        descr={Object.keys(formData)[0]}
        setFormData={setFormData}
        formData={formData}
        options={DEVICES}
      />
      <div className="mb-5">
        <label htmlFor={Object.keys(formData)[1]}>Название:</label>
        <input
          type="text"
          id={Object.keys(formData)[1]}
          name={Object.keys(formData)[1]}
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <SelectCardProduct
        descr={Object.keys(formData)[2]}
        setFormData={setFormData}
        formData={formData}
        options={MANUFACTURERS}
      />
      <div className="mb-5">
        <label htmlFor={Object.keys(formData)[3]}>Изображение:</label>
        <input
          type="file"
          id={Object.keys(formData)[3]}
          name={Object.keys(formData)[3]}
          value={formData.image}
          onChange={handleInputChange}
        />
      </div>
      {formData.device !== "callingPanel" && (
        <SelectCardProduct
          descr={Object.keys(formData)[4]}
          setFormData={setFormData}
          formData={formData}
          options={SCREEN_SIZES}
        />
      )}
      <div className="mb-5">
        <label htmlFor={Object.keys(formData)[5]}>Описание:</label>
        <textarea
          id={Object.keys(formData)[5]}
          name={Object.keys(formData)[5]}
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <SelectCardProduct
        descr={Object.keys(formData)[6]}
        setFormData={setFormData}
        formData={formData}
        options={WIFI}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default CardProductForm;
