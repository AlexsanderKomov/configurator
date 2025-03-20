"use client";

import { useEffect, useState } from "react";
import Button from "../Button";

interface IChangeProductModal {
  isOpen: boolean;
  onClose: () => void;
}

function ChangeProductModal({ isOpen, onClose }: IChangeProductModal) {
  const [products, setProducts] = useState([]); // Состояние для хранения товаров

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {products.map((item, index) => (
        <div key={`${item}_${index}`}>{item.article}</div>
      ))}
      <Button
        text="Закрыть"
        onClick={onClose}
        className="bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500"
      />
    </div>
  );
}

export default ChangeProductModal;
