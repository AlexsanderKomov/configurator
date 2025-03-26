"use client";
import ReadExcelForm from "@/components/layout/Main/AddProduct/ReadExcelForm";
import TypeOfSystems from "@/components/layout/Main/AddProduct/TypeOfSystems";
import Button from "@/components/uikit/Button";
import { useState } from "react";

function AddProduct() {
  const [isExcelForm, setIsExcelForm] = useState<boolean>(true);

  return (
    <div className="flex flex-col items-center gap-y-8">
      <Button
        text={isExcelForm ? "Через Excel" : "Через форму"}
        onClick={() => setIsExcelForm(!isExcelForm)}
      />

      {isExcelForm ? <TypeOfSystems /> : <ReadExcelForm />}
    </div>
  );
}

export default AddProduct;
