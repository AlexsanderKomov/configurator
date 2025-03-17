import React from "react";
import Button from "../Button";
import { IData } from "@/components/configurator/store";

interface IModalCard {
  item: IData;
  onClose: (status: boolean) => void;
}

function ModalCard(props: IModalCard) {
  const { item, onClose } = props;
  const { name, manufacturer } = item;

  const handleClick = () => {
    onClose(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-4">
        <h2 className="font-bold text-xl mb-4">{name}</h2>
        <p className="text-gray-700 text-base mb-4">{manufacturer}</p>
        <Button text="Закрыть" onClick={handleClick} />
      </div>
    </div>
  );
}

export default ModalCard;
