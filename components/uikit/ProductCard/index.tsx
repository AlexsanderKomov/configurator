import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import { IData, useConfigStore } from "@/components/configurator/store";
import { createPortal } from "react-dom";
import ModalCard from "./ModalCard";
import { saveItemToLocalStorage } from "@/lib/helpers/dataLocalStorage";

export interface IProductCardProps {
  item: IData;
}

const ProductCard = ({ item }: IProductCardProps) => {
  const { name, article, image, manufacturer } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { stageForward, updateSelectedValue, stage } = useConfigStore(
    (store) => store
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (statusFalse: boolean) => {
    setIsModalOpen(statusFalse);
  };

  const handleSelect = () => {
    updateSelectedValue(item);
    stageForward();
    saveItemToLocalStorage(item, stage);
  };

  return (
    <>
      <div className="w-[300px] h-full flex flex-col rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        {/* Изображение с фиксированной высотой и контейнером */}
        <div className="w-full h-48 flex items-center justify-center bg-gray-50 p-4">
          <Image
            className="w-full h-full object-contain"
            width={300}
            height={192}
            src={image}
            alt={name}
            priority
          />
        </div>

        {/* Контент карточки с flex-grow для заполнения пространства */}
        <div className="flex flex-col flex-grow px-6 py-4">
          <h3 className="font-bold text-base mb-2 line-clamp-2">{name}</h3>
          <p className="text-gray-900 font-semibold text-sm mb-2">
            {manufacturer}
          </p>
          <p className="text-gray-700 text-sm">Артикул: {article}</p>

          {/* Кнопки внизу карточки */}
          <div className="mt-auto pt-4 pb-6 flex gap-5">
            <Button text="Описание" onClick={handleOpenModal} />
            <Button text="Выбрать" onClick={handleSelect} />
          </div>
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
