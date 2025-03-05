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
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {addForm ? "Через Excel" : "Через форму"}
      </button>
      {addForm && <TypeOfSystems />}
      {!addForm && <ReadExcelForm />}
    </div>
  );
}

export default AddProduct;
