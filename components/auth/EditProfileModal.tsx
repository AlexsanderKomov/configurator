// components/EditProfileModal.tsx
"use client";

import { useEffect, useState } from "react";
import { IUser } from "./store";

interface EditProfileModalProps {
  user: IUser;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedUser: IUser) => void;
}

const EditProfileModal = ({
  user,
  isOpen,
  onClose,
  onSave,
}: EditProfileModalProps) => {
  const [formData, setFormData] = useState<IUser>(user);
  const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  // Регулярное выражение для проверки номера телефона
  const phoneRegex = /^\+?[0-9]{11}$/; // Пример: +79991234567 или 79991234567

  // Сравниваем formData и user при каждом изменении formData
  useEffect(() => {
    const isChanged =
      formData.first_name !== user.first_name ||
      formData.last_name !== user.last_name ||
      formData.company !== user.company ||
      formData.phone_number !== user.phone_number;
    setIsFormChanged(isChanged);
  }, [formData, user]);

  // Валидация номера телефона
  const validatePhone = (phone: string) => {
    if (!phoneRegex.test(phone)) {
      setPhoneError(
        "Номер телефона должен содержать 11 цифр и может начинаться с +"
      );
      return false;
    }
    setPhoneError(null);
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Валидация номера телефона при изменении
    if (name === "phone_number") {
      validatePhone(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Проверяем валидность номера телефона перед отправкой
    if (!validatePhone(formData.phone_number)) {
      return; // Останавливаем отправку, если номер невалиден
    }

    onSave(formData); // Передаем обновленные данные в родительский компонент
    onClose(); // Закрываем модальное окно после сохранения
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Редактирование профиля</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Имя:</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Фамилия:</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Компания:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Номер телефона:
            </label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${
                phoneError ? "border-red-500" : ""
              }`}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Закрыть
            </button>
            <button
              type="submit"
              className={`px-4 py-2 bg-blue-500 text-white rounded ${
                !isFormChanged || phoneError
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              }`}
              disabled={!isFormChanged || !!phoneError}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
