"use client";
import ReadExcelForm from "@/components/layout/Main/AddProduct/ReadExcelForm";
import TypeOfSystems from "@/components/layout/Main/AddProduct/TypeOfSystems";
import Button from "@/components/uikit/Button";
import { useState } from "react";

function AddProduct() {
  const [addForm, setAddForm] = useState<boolean>(true);

  const handleClick = () => {
    setAddForm(!addForm);
  };

  return (
    <div className="flex flex-col items-center gap-y-8">
      <Button
        text={addForm ? "Через Excel" : "Через форму"}
        onClick={handleClick}
      />

      {addForm && <TypeOfSystems />}
      {!addForm && <ReadExcelForm />}
    </div>
  );
}

export default AddProduct;
