"use client";

import { useEffect, useState } from "react";
import Button from "../Button";
import { createPortal } from "react-dom";
import EditProductModal from "./ChangeProductModal";
import { IData } from "@/components/configurator/store";

interface IChangeProductModal {
  isOpen: boolean;
  onClose: () => void;
}

function ChangeProductModal({ isOpen, onClose }: IChangeProductModal) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IData>();
  const [products, setProducts] = useState<IData[]>([]); // Состояние для хранения товаров

  useEffect(() => {
    // Асинхронная функция для получения данных
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/api/products", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }

      const data = await response.json(); // Парсим JSON
      console.log(data);
      setProducts(data); // Обновляем состояние с товарами
    };

    fetchProducts(); // Вызываем функцию
  }, []);

  const handleSave = async (updatedProduct: IData) => {
    const response = await fetch(
      `http://localhost:3001/api/products/${updatedProduct.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка при обновлении данных");
    }

    // Обновляем список продуктов
    setProducts((prev) =>
      prev.map((product) =>
        product.article === updatedProduct.article ? updatedProduct : product
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed grid grid-cols-12 grid-rows-12 inset-0 bg-white py-5">
      <div className="grid col-span-12 col-start-2 row-start-1 grid-cols-12">
        <ul className="grid col-span-12 col-start-2 row-start-1 grid-cols-12">
          <li className="grid-cols-1 col-start-1 border">Артикул</li>
          <li className="grid-cols-2 col-start-2 col-end-7 border">
            Наименование
          </li>
          <li className="grid-cols-1 col-start-7 border">Цена</li>
        </ul>
        <ul className="grid col-span-12 col-start-2 row-start-2">
          {products.map((item, index) => (
            <li key={`${item}_${index}`} className="grid grid-cols-12">
              <p className="grid-cols-1 col-start-1 border">{item.article}</p>
              <p className="grid-cols-2 col-start-2 col-end-7 border">
                {item.name}
              </p>
              <p className="grid-cols-1 col-start-7 border">{item.price} руб</p>
              <Button
                text="Изменить"
                onClick={() => {
                  setSelectedProduct(item);
                  setIsOpenModal(true);
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <Button
        text="Закрыть"
        onClick={onClose}
        className="col-span-1 col-start-6 row-span-1 row-start-12 bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500"
      />
      {isOpenModal &&
        createPortal(
          <div className="fixed inset-0 bg-white py-5 flex flex-col items-center justify-center">
            <EditProductModal
              product={selectedProduct}
              onSave={handleSave}
              onClose={() => setIsOpenModal(false)}
            />
          </div>,
          document.getElementById("modal-root") as HTMLElement
        )}
    </div>
  );
}

export default ChangeProductModal;
