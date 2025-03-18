import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import { IData, useConfigStore } from "@/components/configurator/store";
import { createPortal } from "react-dom";
import ModalCard from "./ModalCard";
import { saveItemToLocalStorage } from "@/lib/helpers/saveItemToLocalStorage";

export interface IProductCardProps {
  item: IData;
  onSelect?: (values: IData) => void;
}

const ProductCard = ({ item, onSelect }: IProductCardProps) => {
  const { name, article, image, manufacturer } = item;
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
  const { stageForward } = useConfigStore((store) => store);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (statusFalse: boolean) => {
    setIsModalOpen(statusFalse);
  };

  const handleSelect = () => {
    if (onSelect) {
      onSelect(item); // Вызываем колбэк с данными
    }
    stageForward(); // Вызываем функцию из store

    // Сохраняем item в localStorage
    saveItemToLocalStorage(item);
  };

  return (
    <>
      <div className="w-[400px] rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
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
          <Button text="Выбрать" onClick={handleSelect} />
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen &&
        createPortal(
          <ModalCard item={item} onClose={handleCloseModal} />,
          document.getElementById("modal-root") as HTMLElement
        )}
    </>
  );
};

export default ProductCard;
