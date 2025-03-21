"use client";

import { IData } from "@/components/configurator/store";
import React, { useEffect, useState } from "react";

const EditProductModal = ({
  product,
  isOpen,
  onClose,
  onSave,
}: IEditProductModalProps) => {
  const [formData, setFormData] = useState<IData>(product);
  const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<string | null>(null);

  // Сравниваем formData и product при каждом изменении formData
  useEffect(() => {
    const isChanged =
      formData.article !== product.article ||
      formData.name !== product.name ||
      formData.price !== product.price;
    setIsFormChanged(isChanged);
  }, [formData, product]);

  // Валидация цены
  const validatePrice = (price: number | null) => {
    if (price === null || price < 0) {
      setPriceError("Цена должна быть положительным числом");
      return false;
    }
    setPriceError(null);
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? (value ? parseFloat(value) : null) : value,
    }));

    // Валидация цены при изменении
    if (name === "price") {
      validatePrice(value ? parseFloat(value) : null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Проверяем валидность цены перед отправкой
    if (!validatePrice(formData.price)) {
      return; // Останавливаем отправку, если цена невалидна
    }

    onSave(formData); // Передаем обновленные данные в родительский компонент
    onClose(); // Закрываем модальное окно после сохранения
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Редактирование продукта</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <LabelForm label="Артикул:">
              <InputForm
                name="article"
                value={formData.article || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </LabelForm>
          </div>
          <div className="mb-4">
            <LabelForm label="Наименование:">
              <InputForm
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </LabelForm>
          </div>
          <div className="mb-4">
            <LabelForm label="Цена:">
              <InputForm
                name="price"
                type="number"
                value={formData.price || ""}
                onChange={handleChange}
                className={`w-full p-2 border rounded ${
                  priceError ? "border-red-500" : ""
                }`}
              />
            </LabelForm>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              text="Закрыть"
              onClick={onClose}
              className="bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500"
            />
            <Button
              text="Сохранить"
              type="submit"
              error={!isFormChanged || Boolean(priceError)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
