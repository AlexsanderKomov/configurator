// components/EditProfileModal.tsx
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "./store";
import Button from "../uikit/Button";
import InputForm from "./components/InputForm";
import LabelForm from "./components/LabelForm";

interface IEditProfileModalProps {
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
}: IEditProfileModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<IUser>({
    defaultValues: user,
  });

  const phoneRegex = /^\+?[0-9]{11}$/;

  React.useEffect(() => {
    reset(user);
  }, [user, reset, isOpen]);

  const onSubmit = (data: IUser) => {
    onSave(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Редактирование профиля</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <LabelForm label="Имя:">
              <InputForm
                {...register("first_name", { required: "Имя обязательно" })}
                error={errors.first_name?.message}
              />
            </LabelForm>
          </div>
          <div className="mb-4">
            <LabelForm label="Фамилия:">
              <InputForm
                {...register("last_name", { required: "Фамилия обязательна" })}
                error={errors.last_name?.message}
              />
            </LabelForm>
          </div>
          <div className="mb-4">
            <LabelForm label="Компания:">
              <InputForm {...register("company")} />
            </LabelForm>
          </div>
          <div className="mb-4">
            <LabelForm label="Номер телефона:">
              <InputForm
                {...register("phone_number", {
                  required: "Номер телефона обязателен",
                  pattern: {
                    value: phoneRegex,
                    message: "Формат: 11 цифр, можно с +",
                  },
                })}
                error={errors.phone_number?.message}
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
              disabled={!isDirty || Object.keys(errors).length > 0}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
