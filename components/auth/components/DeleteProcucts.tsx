"use client";

import Button from "@/components/uikit/Button";
import { useEffect, useState } from "react";

interface IProduct {
  id: string;
  name: string;
  article: string;
  image?: string; // Добавляем поле для изображения
  // другие поля товара
}

interface IDeleteProductsProps {
  onClose: () => void;
}

function DeleteProducts(props: IDeleteProductsProps) {
  const { onClose } = props;
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<
    { id: string; image?: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectAll, setSelectAll] = useState(false);

  // Функция для получения всех товаров
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error("Ошибка при загрузке товаров:", err);
      setError("Не удалось загрузить товары");
    } finally {
      setIsLoading(false);
    }
  };

  // Загружаем товары при монтировании компонента
  useEffect(() => {
    fetchProducts();
  }, []);

  // Обработчик выбора/снятия всех товаров
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(
        products.map((product) => ({
          id: product.id,
          image: product.image,
        }))
      );
    }
    setSelectAll(!selectAll);
  };

  // Обработчик выбора товара
  const handleSelectProduct = (product: IProduct) => {
    setSelectedProducts((prev) => {
      const isSelected = prev.some((item) => item.id === product.id);

      if (isSelected) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, { id: product.id, image: product.image }];
      }
    });
  };

  // Обработчик удаления товаров
  const handleDeleteProducts = async () => {
    if (selectedProducts.length === 0) return;

    try {
      const response = await fetch("/api/products", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: selectedProducts, // Теперь передаём массив объектов с id и image
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при удалении товаров");
      }

      // Обновляем список после удаления
      await fetchProducts();
      setSelectedProducts([]);
      setSelectAll(false);
    } catch (err) {
      console.error("Ошибка при удалении товаров:", err);
      setError("Не удалось удалить товары");
    }
  };

  // Проверяем, выбран ли конкретный товар
  const isProductSelected = (productId: string) => {
    return selectedProducts.some((item) => item.id === productId);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-[1200px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Удаление продуктов</h2>

        {isLoading ? (
          <div>Загрузка...</div>
        ) : error ? (
          <div className="text-red-500 mb-4">{error}</div>
        ) : (
          <>
            <div className="mb-2">
              <Button
                text={selectAll ? "Снять все" : "Выбрать все"}
                onClick={handleSelectAll}
                className="bg-blue-500 hover:bg-blue-600 mb-2"
              />
            </div>

            <div className="mb-4 max-h-[60vh] overflow-y-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center mb-2 p-2 border rounded"
                >
                  <input
                    type="checkbox"
                    checked={isProductSelected(product.id)}
                    onChange={() => handleSelectProduct(product)}
                    className="mr-2"
                  />
                  <div className="flex-1">
                    <div className="font-medium">
                      {product.name} ({product.article})
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div>
                <Button
                  text={`Удалить выбранные (${selectedProducts.length})`}
                  onClick={handleDeleteProducts}
                  disabled={selectedProducts.length === 0}
                  className="bg-red-500 hover:bg-red-600"
                />
                {selectedProducts.some((p) => p.image) && (
                  <div className="text-sm text-gray-600 mt-1">
                    Будет удалено{" "}
                    {selectedProducts.filter((p) => p.image).length} изображений
                  </div>
                )}
              </div>
              <Button
                text="Закрыть"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DeleteProducts;
