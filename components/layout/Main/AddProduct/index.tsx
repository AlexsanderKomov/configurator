"use client";
import ReadExcelForm from "@/components/layout/Main/AddProduct/ReadExcelForm";
import TypeOfSystems from "@/components/layout/Main/AddProduct/TypeOfSystems";
import { useState } from "react";

function AddProduct() {
  const [addForm, setAddForm] = useState<boolean>(true);

  const handleClick = () => {
    setAddForm(!addForm);
  };

  return (
    <div className="flex flex-col items-center gap-y-8">
      <button onClick={handleClick}>
        {addForm ? "Через Excel" : "Через форму"}
      </button>
      {addForm && <TypeOfSystems />}
      {!addForm && <ReadExcelForm />}
    </div>
  );
}

export default AddProduct;
