"use client";
import ListLoadedProducts from "@/components/layout/Main/ListLoadedProducts";
import TypeOfSystems from "@/components/layout/Main/TypeOfSystems";
import ReadExcel from "@/components/layout/Main/TypeOfSystems/components/ReadExcel";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function AddProducts() {
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
      {!addForm && <ReadExcel />}
      <ListLoadedProducts />
      <ToastContainer />
    </div>
  );
}

export default AddProducts;
