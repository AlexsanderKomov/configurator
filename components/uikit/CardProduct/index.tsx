import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import { IData, useConfigStore } from "@/components/configurator/store";

const ProductCard = ({ item }: { item: IData }) => {
  const { name, article, image, manufacturer, description } = item;
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
  const { stageForward } = useConfigStore((store) => store);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        <Image
          className="w-full h-48 object-contain"
          width={300}
          height={200}
          src={image}
          alt={name}
          priority
        />
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <p className="text-gray-900 font-semibold text-lg">{manufacturer}</p>
          <p className="text-gray-700 text-base mb-4">{article}</p>
          <p className="text-gray-700 text-base mb-4">{item.screen_sizes}</p>
        </div>
        <div className="px-6 pt-4 pb-6 flex gap-5">
          <Button text="Описание" onClick={handleOpenModal} />
          <Button text="Выбрать" onClick={stageForward} />
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
            <h2 className="font-bold text-xl mb-4">{name}</h2>
            <p className="text-gray-700 text-base mb-4">{description}</p>
            <Button text="Закрыть" onClick={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
